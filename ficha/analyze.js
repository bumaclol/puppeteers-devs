(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.FichaAnalyze = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const K = new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
  ]);

  function rotr(n, x) {
    return (x >>> n) | (x << (32 - n));
  }

  function sha256(text) {
    const bytes = new TextEncoder().encode(String(text));
    const bitLen = bytes.length * 8;
    const paddedLen = ((bytes.length + 9 + 63) >> 6) << 6;
    const data = new Uint8Array(paddedLen);
    data.set(bytes);
    data[bytes.length] = 0x80;
    const view = new DataView(data.buffer);
    view.setUint32(paddedLen - 4, bitLen >>> 0, false);
    view.setUint32(paddedLen - 8, Math.floor(bitLen / 0x100000000), false);

    const w = new Uint32Array(64);
    let a0 = 0x6a09e667;
    let b0 = 0xbb67ae85;
    let c0 = 0x3c6ef372;
    let d0 = 0xa54ff53a;
    let e0 = 0x510e527f;
    let f0 = 0x9b05688c;
    let g0 = 0x1f83d9ab;
    let h0 = 0x5be0cd19;

    for (let i = 0; i < data.length; i += 64) {
      for (let t = 0; t < 16; t += 1) w[t] = view.getUint32(i + t * 4, false);
      for (let t = 16; t < 64; t += 1) {
        const s0 = rotr(7, w[t - 15]) ^ rotr(18, w[t - 15]) ^ (w[t - 15] >>> 3);
        const s1 = rotr(17, w[t - 2]) ^ rotr(19, w[t - 2]) ^ (w[t - 2] >>> 10);
        w[t] = (w[t - 16] + s0 + w[t - 7] + s1) >>> 0;
      }
      let a = a0;
      let b = b0;
      let c = c0;
      let d = d0;
      let e = e0;
      let f = f0;
      let g = g0;
      let h = h0;
      for (let t = 0; t < 64; t += 1) {
        const S1 = rotr(6, e) ^ rotr(11, e) ^ rotr(25, e);
        const ch = (e & f) ^ (~e & g);
        const temp1 = (h + S1 + ch + K[t] + w[t]) >>> 0;
        const S0 = rotr(2, a) ^ rotr(13, a) ^ rotr(22, a);
        const maj = (a & b) ^ (a & c) ^ (b & c);
        const temp2 = (S0 + maj) >>> 0;
        h = g;
        g = f;
        f = e;
        e = (d + temp1) >>> 0;
        d = c;
        c = b;
        b = a;
        a = (temp1 + temp2) >>> 0;
      }
      a0 = (a0 + a) >>> 0;
      b0 = (b0 + b) >>> 0;
      c0 = (c0 + c) >>> 0;
      d0 = (d0 + d) >>> 0;
      e0 = (e0 + e) >>> 0;
      f0 = (f0 + f) >>> 0;
      g0 = (g0 + g) >>> 0;
      h0 = (h0 + h) >>> 0;
    }

    return [a0, b0, c0, d0, e0, f0, g0, h0].map((n) => n.toString(16).padStart(8, "0")).join("");
  }

  function hostOf(raw) {
    try {
      return new URL(raw).host;
    } catch (error) {
      return "";
    }
  }

  function clip(line) {
    const clean = line.replace(/\s+/g, " ").trim();
    return clean.length > 160 ? `${clean.slice(0, 157)}…` : clean;
  }

  function scan(source) {
    const urls = [];
    const comments = [];
    let i = 0;
    let line = 1;
    let lineStart = 0;
    let state = "code";
    let commentFrom = -1;
    const expr = [];

    function currentLine() {
      const end = source.indexOf("\n", lineStart);
      return source.slice(lineStart, end === -1 ? source.length : end);
    }

    function pushUrl(raw, commented) {
      const host = hostOf(raw);
      if (!host) return;
      urls.push({ host, line, quote: clip(currentLine()), commented });
    }

    function takeUrl(commented) {
      const match = source.slice(i).match(/^https?:\/\/[^\s"'`<>\\)]+/);
      if (!match) return false;
      pushUrl(match[0], commented);
      i += match[0].length;
      return true;
    }

    while (i < source.length) {
      const ch = source[i];
      const next = source[i + 1];

      if (ch === "\n") {
        line += 1;
        lineStart = i + 1;
        if (state === "line") {
          if (commentFrom >= 0) comments.push([commentFrom, i]);
          commentFrom = -1;
          state = "code";
        }
        i += 1;
        continue;
      }

      if (state === "line" || state === "block") {
        if ((source.startsWith("http://", i) || source.startsWith("https://", i)) && takeUrl(true)) continue;
        if (state === "block" && ch === "*" && next === "/") {
          if (commentFrom >= 0) comments.push([commentFrom, i + 2]);
          commentFrom = -1;
          state = "code";
          i += 2;
          continue;
        }
        i += 1;
        continue;
      }

      if (state === "sq" || state === "dq" || state === "tpl") {
        if (ch === "\\") {
          i += 2;
          continue;
        }
        if (state === "tpl" && ch === "$" && next === "{") {
          expr.push(0);
          state = "code";
          i += 2;
          continue;
        }
        if ((state === "sq" && ch === "'") || (state === "dq" && ch === '"') || (state === "tpl" && ch === "`")) {
          state = "code";
          i += 1;
          continue;
        }
        if ((source.startsWith("http://", i) || source.startsWith("https://", i)) && takeUrl(false)) continue;
        i += 1;
        continue;
      }

      if (ch === "/" && next === "/") {
        state = "line";
        commentFrom = i;
        i += 2;
        continue;
      }
      if (ch === "/" && next === "*") {
        state = "block";
        commentFrom = i;
        i += 2;
        continue;
      }
      if (ch === "'") {
        state = "sq";
        i += 1;
        continue;
      }
      if (ch === '"') {
        state = "dq";
        i += 1;
        continue;
      }
      if (ch === "`") {
        state = "tpl";
        i += 1;
        continue;
      }
      if (ch === "{") {
        if (expr.length) expr[expr.length - 1] += 1;
        i += 1;
        continue;
      }
      if (ch === "}" && expr.length) {
        if (expr[expr.length - 1] === 0) {
          expr.pop();
          state = "tpl";
        } else {
          expr[expr.length - 1] -= 1;
        }
        i += 1;
        continue;
      }
      if ((source.startsWith("http://", i) || source.startsWith("https://", i)) && takeUrl(false)) continue;
      i += 1;
    }

    if (commentFrom >= 0) comments.push([commentFrom, source.length]);

    function commentedAt(index) {
      return comments.some((range) => index >= range[0] && index < range[1]);
    }

    function lineAt(index) {
      return source.slice(0, index).split("\n").length;
    }

    function quoteAt(index) {
      const start = source.lastIndexOf("\n", index) + 1;
      const end = source.indexOf("\n", index);
      return clip(source.slice(start, end === -1 ? source.length : end));
    }

    const stores = [];
    const asks = [];
    const storeRe = /\b(localStorage|sessionStorage)\.(getItem|setItem|removeItem)\(\s*(['"`])([^'"`]*)\3/g;
    const cookieRe = /\bdocument\.cookie\b/g;
    const idbRe = /\bindexedDB\b/g;
    const askRe = /\b(getUserMedia|geolocation|mediaDevices)\b/g;
    let match;

    while ((match = storeRe.exec(source))) {
      if (commentedAt(match.index)) continue;
      stores.push({
        api: match[1],
        key: match[4] || "(sin clave)",
        line: lineAt(match.index),
        quote: quoteAt(match.index),
      });
    }
    while ((match = cookieRe.exec(source))) {
      if (commentedAt(match.index)) continue;
      stores.push({ api: "cookie", key: "", line: lineAt(match.index), quote: quoteAt(match.index) });
    }
    while ((match = idbRe.exec(source))) {
      if (commentedAt(match.index)) continue;
      stores.push({ api: "indexedDB", key: "", line: lineAt(match.index), quote: quoteAt(match.index) });
    }
    while ((match = askRe.exec(source))) {
      if (commentedAt(match.index)) continue;
      asks.push({ api: match[1], line: lineAt(match.index), quote: quoteAt(match.index) });
    }

    return { urls, stores, asks };
  }

  function unique(items, keyFn) {
    const seen = new Set();
    const out = [];
    items.forEach((item) => {
      const key = keyFn(item);
      if (seen.has(key)) return;
      seen.add(key);
      out.push(item);
    });
    return out;
  }

  function analyze(source, meta) {
    const text = String(source || "");
    const found = scan(text);
    const named = unique(
      found.urls.filter((item) => !item.commented),
      (item) => item.host
    );
    const mentioned = unique(
      found.urls.filter((item) => item.commented && !named.some((host) => host.host === item.host)),
      (item) => item.host
    );
    const cites = unique(
      named
        .map((item) => item.quote)
        .concat(found.stores.map((item) => item.quote))
        .concat(found.asks.map((item) => item.quote))
        .filter(Boolean),
      (quote) => quote
    ).slice(0, 3);

    return {
      name: (meta && meta.name) || "Sin nombre",
      author: (meta && meta.author) || "",
      at: (meta && meta.at) || new Date().toISOString().slice(0, 10),
      bytes: new TextEncoder().encode(text).length,
      hash: sha256(text),
      sends: named.map((item) => ({ host: item.host, line: item.line, quote: item.quote })),
      mentions: mentioned.map((item) => ({ host: item.host, line: item.line })),
      stores: unique(found.stores, (item) => `${item.api}:${item.key}`),
      asks: unique(found.asks, (item) => item.api),
      cites,
    };
  }

  return { analyze, sha256 };
});
