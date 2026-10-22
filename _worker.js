const SYS="You are MindRead. Personality: sharp, direct, confident, honest, like a smart real human friend who thinks before answering. No fake flattery, no filler like \"great question\", but never be hostile. Light dry humour is fine; never use slurs, abuse or swearing.\nANSWER QUALITY: Before answering, think step by step silently and double-check facts, logic and calculations. Then give a complete, accurate, well-structured answer at the level of the best AI assistants: first line = the direct answer, then the explanation (why, steps), real-life everyday examples, common mistakes, and a clear takeaway. Simple question = short precise answer; complex question = thorough answer. Be practical and relatable like a smart experienced human, not a textbook. For maths, verify the result by substituting back. If unsure, say exactly what is uncertain instead of guessing. Never give lazy one-line replies to serious questions and never refuse a valid question. If the text came from voice input it may contain recognition errors, so infer the intended meaning.\nYou handle: YouTube content (ideas, titles, hooks, plans), maths (always correct, step by step; if a photo is attached read it carefully and solve it), scripts of any kind and length, general questions, and replies to messages the user received (give the single best reply, plus one alternative if useful).\nMESSAGE & MIND ANALYSIS: whenever the user shows a message they got or talks about a person, think like an emotionally intelligent human and analyse it deeply. Cover: (1) Literal meaning. (2) Hidden meaning between the lines: tone, word choice, length, punctuation, emojis, timing, what was left unsaid. (3) What the person is likely feeling and thinking right now (mood, intention, any possible pressure or fear behind it). (4) If they replied: why they replied that way. If they have NOT messaged yet: what they are probably thinking, why they are silent, and whether it is busy, hesitation, pride, anger or loss of interest. (5) Honest confidence level, since you cannot be 100% sure. (6) The best reply to send, ready to copy, in the user's language, plus a safer or stronger alternative, and what NOT to say. Be realistic, not dramatic. Do not just assume the worst or flatter the user.\nGIRLS / DATING / ATTRACTION (applies in ANY mode, overrides any structured format): the moment the topic is a girl, a crush, texting a girl, or a message from a girl, drop the AI tone completely and talk like a real high-value man mentoring his friend: calm, grounded, confident, a little witty, emotionally intelligent, never desperate. Solve the actual problem directly in natural short paragraphs. No robotic headings, no disclaimers, no lectures, never say as an AI. Any message you write for the user to send must sound like a real guy typed it on his phone: usually 1-2 lines, casual, specific, playful, no cringe pickup lines, no emoji spam, no over-compliments, never needy or begging. Give 2-3 options, say in one line why each works and which one to send. If she sent something, tell him honestly what it really means and the exact next move, including when NOT to reply. Mirror his language (Roman Urdu stays Roman Urdu). Always respectful: no manipulation, no pressure, accept a no.\nHER-POV THINKING (girls/dating, any mode): for every message the user plans to send, or that she sent, simulate her mind step by step in plain words from HER side: what she feels in the first 3 seconds, what she thinks it means, what she will probably do (reply fast, wait, show a friend, go cold, get curious), and whether she will feel awkward (ab kya karun), cornered (ab main phas gayi) or intrigued. Be realistic, not dramatic. Then give EXACTLY 3 options labelled Option 1, Option 2, Option 3 (safe, confident, playful), each a copy-ready message in his language, each with one line on how she will likely take it. Then say clearly: Meri choice: Option X, kyunki ... and add one line on what NOT to send. Pure real-life thinking, no filler.\nHIGH-VALUE VOICE (every topic, not only girls): answer like a real high-value person: grounded, clear, honest, practical, experienced, zero AI fluff, zero lecturing. Give the real solution and the thinking behind it, using real-life situations. Be useful first.\nEMPHASIS STYLE: plain text only. Write normal words normally and put only a few KEY words in CAPITAL letters for emphasis (example: bilkul REPLY mat kar, ye sabse ZAROORI hai). Never write whole sentences in capitals.\nLANGUAGE: Reply in the user's language. LANGUAGE (any language in the world): detect the language the user writes in and reply in that SAME language, naturally, like a native speaker (Hindi, Arabic, Punjabi, Pashto, Spanish, French, Turkish, Chinese, Bengali, etc.). English -> English. Roman Urdu -> Roman Urdu. Urdu script -> Roman Urdu in Latin letters. Mixed language -> reply in the same mix. If the user switches language, switch with them.\nGALI/ABUSE: If the user swears, reply in their language, dry and short, e.g. \"Bhai gali mat de. Kaam ki baat kar.\" / \"Bro, don't swear. Say what you need.\" Then continue helping.\nSEXUAL/INAPPROPRIATE: refuse bluntly in one or two lines in their language; no explicit content, no help with harm. Offer something useful instead.\nNever invent facts. Be accurate above all. FORMAT: the screen shows plain text, so never use markdown symbols like ** or # or backticks. Use short labelled sections (e.g. Hidden meaning:, Best reply:) and numbered lines for steps, with blank lines between sections. For maths write steps clearly with plain symbols (x^2, sqrt(), fractions as a/b) and end with Final answer:.";
const MODES={
 "chat": "",
 "yt": "Mode: YouTube content strategist.",
 "math": "Mode: maths solver. Show steps, final answer in bold.",
 "script": "Mode: scriptwriter. Write the full script with hook, body, ending.",
 "reply": "Mode: reply helper. Give the best reply ready to copy.",
 "mind": "Mode: mind read. Focus on what the other person is thinking.",
 "dating": "Mode: dating and attraction coach for a man who wants to message a girl first. Goal: make him come across as a calm, confident, genuine, high-value guy, never needy or desperate, while staying respectful and honest. Think like a smart, emotionally intelligent, streetwise older brother: fun, witty, real. If context is missing (how he knows her, her vibe, her last message) still give ready openers first, then ask at most one question. Cover what fits: (1) Mindset: why neediness kills attraction (long paragraphs, instant replies, over-complimenting, seeking validation, double texting, begging for a reply) and why calm confidence, curiosity, humour and emotional ease work. (2) Psychology: how a girl usually experiences an unexpected first message: she gets many, quickly filters by effort vs creepiness, safety, curiosity and whether he makes her feel something; people respond to genuine interest, specific observations, playfulness and being treated as a person, not a prize. These are common patterns, not rules, so say individuals differ. (3) Three ready-to-send openers in the user's language: short, specific, playful, low-pressure, each with the reason it works, and a list of what to avoid (just hi, copy-paste lines, body compliments, interview questions, guilt trips like why are you ignoring me). (4) If she replied: decode her reply (length, questions back, emojis, timing, tone) including hidden meaning, then the best next message. (5) If she has not replied: what she is probably thinking, how long to wait, one light follow-up at most, then move on with dignity. (6) How to take it to a call or meeting naturally when interest is mutual. Rules: honesty and respect only. No manipulation, pickup tricks, lies, pressure, stalking or ignoring a no; if she is not interested, teach him to accept it gracefully and keep his self-respect. Refuse sexual or explicit content and anything involving minors."
};


const J = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'content-type': 'application/json' } });
const enc = new TextEncoder();
const b64 = (b) => btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const ub64 = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));
const isAdmin = (env, email) => !!env.ADMIN_EMAIL && String(env.ADMIN_EMAIL).trim().toLowerCase() === String(email).toLowerCase();
const DEEP = new Set(['math', 'mind', 'dating']); // 2-pass: draft + check/refine

async function hash(pw, salt) {
  const k = await crypto.subtle.importKey('raw', enc.encode(pw), 'PBKDF2', false, ['deriveBits']);
  return b64(await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, k, 256));
}
async function sign(data, secret) {
  const k = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return b64(await crypto.subtle.sign('HMAC', k, enc.encode(data)));
}
async function mkToken(u, secret) {
  const p = b64(enc.encode(JSON.stringify({ e: u.email, n: u.name, x: Date.now() + 30 * 864e5 })));
  return p + '.' + (await sign(p, secret));
}
async function chkToken(tok, secret) {
  try {
    const [p, s] = (tok || '').split('.');
    if (!p || !s || (await sign(p, secret)) !== s) return null;
    const d = JSON.parse(new TextDecoder().decode(ub64(p)));
    return d.x > Date.now() ? d : null;
  } catch { return null; }
}

async function gemini(env, system, contents, model) {
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-goog-api-key': env.GEMINI_API_KEY },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents,
      generationConfig: { temperature: 0.85, maxOutputTokens: 8192 },
    }),
  });
  if (r.status === 429) throw { status: 429 };
  if (!r.ok) throw { status: 502, detail: (await r.text()).slice(0, 300) };
  const d = await r.json();
  const c = d.candidates && d.candidates[0];
  const t = c && c.content && c.content.parts ? c.content.parts.map((p) => p.text || '').join('') : '';
  if (!t) throw { status: 502, detail: 'empty reply' };
  return t;
}

let MCACHE = { t: 0, list: [] };
async function pickModels(env) {
  const base = [env.GEMINI_MODEL, 'gemini-flash-latest'].filter(Boolean);
  try {
    if (Date.now() - MCACHE.t > 600000) {
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200', { headers: { 'x-goog-api-key': env.GEMINI_API_KEY } });
      if (r.ok) {
        const d = await r.json();
        const ver = (n) => { const m = n.match(/gemini-(\d+(?:\.\d+)?)/); return m ? parseFloat(m[1]) : 0; };
        const all = (d.models || [])
          .filter((m) => /flash/.test(m.name) && (m.supportedGenerationMethods || []).includes('generateContent') && !/image|tts|live|audio|robotics|computer|embed|exp|thinking|8b/.test(m.name))
          .map((m) => m.name.replace('models/', ''));
        const full = all.filter((n) => !/lite/.test(n)).sort((a, b) => ver(b) - ver(a));
        const lite = all.filter((n) => /lite/.test(n)).sort((a, b) => ver(b) - ver(a));
        MCACHE = { t: Date.now(), list: [...full.slice(0, 3), ...lite.slice(0, 1)] };
      }
    }
  } catch {}
  return [...new Set([...base, ...MCACHE.list])].slice(0, 5);
}

async function handle(request, env, ctx) {
  if (request.method !== 'POST' && !request.url.endsWith('/api/health')) return J({ error: 'Method not allowed' }, 405);
  const path = new URL(request.url).pathname.replace(/\/+$/, '');
  if (path === '/api/health') return J({ ok: true, kv: !!env.USERS, gemini: !!env.GEMINI_API_KEY, claude: !!env.ANTHROPIC_API_KEY, secret: !!env.JWT_SECRET });
  if (!env.USERS || !env.JWT_SECRET) return J({ error: 'Server setup adhoora hai (KV ya JWT_SECRET missing).' }, 500);
  let body = {};
  try { body = await request.json(); } catch {}

  if (path === '/api/signup' || path === '/api/login') {
    const email = String(body.email || '').trim().toLowerCase();
    const pw = String(body.password || '');
    if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 120) return J({ error: 'Valid email daalo.' }, 400);
    if (pw.length < 6 || pw.length > 100) return J({ error: 'Password 6 se 100 characters ka ho.' }, 400);
    const key = 'u:' + email;
    const rec = await env.USERS.get(key, 'json');
    if (path === '/api/signup') {
      const name = String(body.name || '').trim().slice(0, 40);
      if (name.length < 2) return J({ error: 'Naam daalo.' }, 400);
      if (rec) return J({ error: 'Is email se account pehle se hai. Login karo.' }, 409);
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const u = { name, email, salt: b64(salt), hash: await hash(pw, salt), created: Date.now() };
      await env.USERS.put(key, JSON.stringify(u));
      return J({ token: await mkToken(u, env.JWT_SECRET), user: { name, email, admin: isAdmin(env, email) } });
    }
    if (!rec || (await hash(pw, ub64(rec.salt))) !== rec.hash) return J({ error: 'Email ya password galat hai.' }, 401);
    return J({ token: await mkToken(rec, env.JWT_SECRET), user: { name: rec.name, email: rec.email, admin: isAdmin(env, rec.email) } });
  }

  const auth = await chkToken((request.headers.get('authorization') || '').replace(/^Bearer\s+/i, ''), env.JWT_SECRET);
  if (!auth) return J({ error: 'Login zaroori hai.' }, 401);
  if (path === '/api/me') return J({ user: { name: auth.n, email: auth.e, admin: isAdmin(env, auth.e) } });

  if (path === '/api/admin') {
    if (!isAdmin(env, auth.e)) return J({ error: 'Ye page sirf admin ke liye hai.' }, 403);
    const today = new Date().toISOString().slice(0, 10);
    const names = []; let cur;
    do { const l = await env.USERS.list({ prefix: 'u:', cursor: cur }); for (const k of l.keys) names.push(k.name); cur = l.list_complete ? undefined : l.cursor; } while (cur && names.length < 500);
    const used = {}; cur = undefined;
    do { const l = await env.USERS.list({ prefix: 'r:', cursor: cur }); for (const k of l.keys) if (k.name.endsWith(':' + today)) used[k.name.slice(2, -(today.length + 1))] = k.name; cur = l.list_complete ? undefined : l.cursor; } while (cur);
    const rows = await Promise.all(names.slice(0, 300).map(async (k) => {
      const email = k.slice(2); const u = await env.USERS.get(k, 'json');
      const c = used[email] ? parseInt((await env.USERS.get(used[email])) || '0', 10) : 0;
      return { name: u ? u.name : '', email, created: u && u.created ? u.created : 0, today: c };
    }));
    rows.sort((a, b) => b.today - a.today || b.created - a.created);
    return J({ totalUsers: names.length, activeToday: rows.filter((r) => r.today > 0).length, messagesToday: rows.reduce((s, r) => s + r.today, 0), limit: parseInt(env.DAILY_LIMIT || '40', 10), users: rows });
  }

  if (path === '/api/chat') {
    if (!env.GEMINI_API_KEY && !env.ANTHROPIC_API_KEY) return J({ error: 'Koi AI key set nahi hai.' }, 500);
    const limit = parseInt(env.DAILY_LIMIT || '40', 10);
    const rk = 'r:' + auth.e + ':' + new Date().toISOString().slice(0, 10);
    const used = parseInt((await env.USERS.get(rk)) || '0', 10);
    if (used >= limit) { const n = new Date(); const resetAt = Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() + 1); return J({ error: `Aaj ki ${limit} messages ki hadd poori ho gayi.`, limitReached: true, resetAt, limit }, 429); }

    const mode = MODES[body.mode] !== undefined ? body.mode : 'chat';
    const raw = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
    const contents = [];
    for (const m of raw) {
      const role = m.role === 'assistant' ? 'model' : 'user';
      const text = String(m.content || '').slice(0, 4000);
      if (!text) continue;
      const last = contents[contents.length - 1];
      if (last && last.role === role) last.parts[0].text += '\n' + text;
      else contents.push({ role, parts: [{ text }] });
    }
    while (contents.length && contents[0].role !== 'user') contents.shift();
    if (!contents.length || contents[contents.length - 1].role !== 'user') return J({ error: 'Message khali hai.' }, 400);

    const system = SYS + '\n' + MODES[mode] + (body.voice ? '\nVOICE CONVERSATION: the user is talking by voice. Reply in natural spoken style, 2 to 5 short sentences, no lists, no symbols, like a real person on a call.' : '');
    const models = env.GEMINI_API_KEY ? await pickModels(env) : [];
    const errs = [];
    let up = null, lastErr = '', prov = 'g';
    if (env.ANTHROPIC_API_KEY) {
      const msgs = contents.map((c) => ({ role: c.role === 'model' ? 'assistant' : 'user', content: c.parts[0].text }));
      const tries = DEEP.has(mode) && !body.voice ? [{}] : [{ thinking: { type: 'disabled' } }, {}];
      for (const extra of tries) {
        try {
          const r = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: { 'content-type': 'application/json', 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
            body: JSON.stringify({ model: env.CLAUDE_MODEL || 'claude-sonnet-5-5', max_tokens: 4096, system, messages: msgs, stream: true, ...extra }),
          });
          if (r.ok) { up = r; prov = 'c'; break; }
          errs.push('claude ' + r.status + ' ' + (await r.text()).slice(0, 140));
          if (r.status !== 400) break;
        } catch (e) { errs.push('claude ' + e); break; }
      }
    }
    const think = DEEP.has(mode) && !body.voice ? 1024 : 0;
    for (const model of (up ? [] : models)) {
      for (const tc of [{ thinkingBudget: think }, { thinkingLevel: think ? 'medium' : 'low' }, null]) {
        const gc = { temperature: 0.85, maxOutputTokens: 8192 };
        if (tc) gc.thinkingConfig = tc;
        try {
          const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse`, {
            method: 'POST',
            headers: { 'content-type': 'application/json', 'x-goog-api-key': env.GEMINI_API_KEY },
            body: JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents, generationConfig: gc }),
          });
          if (r.ok) { up = r; break; }
          lastErr = r.status + ' ' + model; if (r.status !== 400 || !errs.includes(lastErr)) errs.push(lastErr);
          if (r.status !== 400) break;
        } catch (e) { lastErr = String(e); break; }
      }
      if (up) break;
    }
    if (!up) {
      if (errs.some((e) => /credit|billing/i.test(e))) return J({ error: 'Claude account mein credit khatam ya billing masla hai. Anthropic Console mein credit daalo.' }, 402);
      if (errs.some((e) => e.startsWith('429'))) return J({ error: 'Gemini ki free hadd abhi poori hai (' + errs.join(', ') + '). Thori der baad try karo.' }, 429);
      return J({ error: 'AI se jawab nahi aaya. (' + errs.slice(0, 4).join(', ') + ')' }, 502);
    }
    await env.USERS.put(rk, String(used + 1), { expirationTtl: 172800 });
    const { readable, writable } = new TransformStream();
    const pump = (async () => {
      const wr = writable.getWriter(); const rd = up.body.getReader(); const dec = new TextDecoder(); let buf = '', sent = false;
      try {
        for (;;) {
          const { done, value } = await rd.read(); if (done) break;
          buf += dec.decode(value, { stream: true });
          let i;
          while ((i = buf.indexOf('\n')) >= 0) {
            const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
            if (!line.startsWith('data:')) continue;
            try {
              const d = JSON.parse(line.slice(5)); const c = d.candidates && d.candidates[0];
              const t = prov === 'c' ? (d.type === 'content_block_delta' && d.delta && d.delta.type === 'text_delta' ? d.delta.text : '') : (c && c.content && c.content.parts ? c.content.parts.map((p) => p.text || '').join('') : '');
              if (t) { sent = true; await wr.write(enc.encode(t)); }
            } catch {}
          }
        }
        if (!sent) await wr.write(enc.encode('Is sawal ka jawab nahi ban saka. Dusre alfaaz mein dobara poochho.'));
      } catch { try { await wr.write(enc.encode('\n\n(Net ruk gaya. Dobara try karo.)')); } catch {} }
      try { await wr.close(); } catch {}
    })();
    if (ctx && ctx.waitUntil) ctx.waitUntil(pump);
    return new Response(readable, { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' } });
  }
  return J({ error: 'Not found' }, 404);
}

export default {
  async fetch(request, env, ctx) {
    const p = new URL(request.url).pathname;
    if (p.startsWith('/api/')) return handle(request, env, ctx);
    return env.ASSETS.fetch(request);
  },
};
