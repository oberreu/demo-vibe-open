const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = Number(process.env.PORT || 3000);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4.1-mini';
const ROOT = path.resolve(__dirname, '..');
const APP_FILE = path.join(ROOT, 'csa_latam_aicm_agent_backend.html');

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
  });
  res.end(JSON.stringify(payload));
}

function sendFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      sendJson(res, 404, { error: 'File not found' });
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

async function callOpenAI({ systemPrompt, messages }) {
  const input = [
    { role: 'system', content: [{ type: 'input_text', text: systemPrompt }] },
    ...messages.map((msg) => ({
      role: msg.role,
      content: [{ type: 'input_text', text: msg.content }]
    }))
  ];

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      input,
      max_output_tokens: 1000
    })
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(text || `OpenAI request failed with ${response.status}`);
  }

  const data = JSON.parse(text);
  return (
    data.output_text ||
    (data.output || [])
      .flatMap((item) => item.content || [])
      .filter((part) => part.type === 'output_text')
      .map((part) => part.text)
      .join('\n\n') ||
    ''
  );
}

const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
    });
    res.end();
    return;
  }

  if (req.method === 'GET' && (reqUrl.pathname === '/' || reqUrl.pathname === '/app')) {
    sendFile(res, APP_FILE, 'text/html; charset=utf-8');
    return;
  }

  if (req.method === 'GET' && reqUrl.pathname === '/api/health') {
    sendJson(res, 200, {
      ok: Boolean(OPENAI_API_KEY),
      model: OPENAI_MODEL,
      app: path.basename(APP_FILE)
    });
    return;
  }

  if (req.method === 'POST' && reqUrl.pathname === '/api/agent') {
    if (!OPENAI_API_KEY) {
      sendJson(res, 500, {
        error: 'OPENAI_API_KEY is not configured on the server.'
      });
      return;
    }

    try {
      const body = await readJsonBody(req);
      const systemPrompt = String(body.systemPrompt || '').trim();
      const messages = Array.isArray(body.messages) ? body.messages : [];

      if (!systemPrompt || messages.length === 0) {
        sendJson(res, 400, {
          error: 'Missing systemPrompt or messages.'
        });
        return;
      }

      const text = await callOpenAI({ systemPrompt, messages });
      sendJson(res, 200, { text, model: OPENAI_MODEL });
    } catch (error) {
      sendJson(res, 500, {
        error: 'Agent request failed.',
        detail: error.message
      });
    }
    return;
  }

  sendJson(res, 404, { error: 'Not found' });
});

server.listen(PORT, () => {
  console.log(`CSA LATAM agent server running at http://localhost:${PORT}`);
  console.log(`Serving ${path.basename(APP_FILE)}`);
  console.log(`OpenAI model: ${OPENAI_MODEL}`);
  console.log(`API key configured: ${OPENAI_API_KEY ? 'yes' : 'no'}`);
});
