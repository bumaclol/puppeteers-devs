(function () {
  const analyze = window.FichaAnalyze.analyze;
  const shelf = document.getElementById("shelf");
  const card = document.getElementById("card");
  const form = document.getElementById("composer");
  const hint = document.getElementById("hint");
  const nameInput = document.getElementById("name");
  const authorInput = document.getElementById("author");
  const sourceInput = document.getElementById("source");
  const STORE = "ficha.registro.v1";
  const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

  const EXAMPLE = {
    name: "Cuotas del club",
    author: "Los datos no salen del club.",
    source: [
      "function marcarPago(socio, monto) {",
      '  const previas = JSON.parse(localStorage.getItem("cuotas") || "[]");',
      "  previas.push({ nombre: socio.nombre, telefono: socio.telefono, monto });",
      '  localStorage.setItem("cuotas", JSON.stringify(previas));',
      '  return fetch("https://hojas.ejemplo.com/cuotas", {',
      "    method: \"POST\",",
      "    body: JSON.stringify({ nombre: socio.nombre, telefono: socio.telefono }),",
      "  });",
      "}",
      "",
    ].join("\n"),
  };

  let fichas = load();
  let sitio = null;
  let selected = "sitio";

  function load() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORE) || "[]");
      return Array.isArray(parsed) ? parsed.filter((item) => item && item.hash && item.id !== "sitio") : [];
    } catch (error) {
      return [];
    }
  }

  function save() {
    localStorage.setItem(STORE, JSON.stringify(fichas));
  }

  function today() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${now.getFullYear()}-${month}-${day}`;
  }

  function fecha(iso) {
    const parts = String(iso || "").split("-");
    if (parts.length !== 3) return iso || "";
    return `${Number(parts[2])} ${MONTHS[Number(parts[1]) - 1] || ""} ${parts[0]}`;
  }

  function bytes(n) {
    return `${Number(n || 0).toLocaleString("es-AR")} bytes`;
  }

  function all() {
    return sitio ? [sitio].concat(fichas) : fichas.slice();
  }

  function current() {
    return all().find((item) => item.id === selected) || null;
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function renderShelf() {
    shelf.replaceChildren();
    all().forEach((ficha) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      if (ficha.id === selected) button.setAttribute("aria-current", "true");
      button.append(el("span", "shelf-name", ficha.name));
      button.append(el("span", "shelf-meta", `${ficha.hash.slice(0, 12)} · ${fecha(ficha.at)}`));
      button.addEventListener("click", () => {
        selected = ficha.id;
        writeHash();
        render();
      });
      item.append(button);
      shelf.append(item);
    });
  }

  function rowList(items, paint) {
    if (!items.length) return null;
    const list = el("ul", "rows");
    items.forEach((item) => list.append(paint(item)));
    return list;
  }

  function renderCard() {
    const ficha = current();
    card.replaceChildren();
    if (!ficha) {
      card.append(el("p", "empty", "Todavía no hay una ficha. Pegá un programa o cargá el ejemplo."));
      return;
    }

    card.append(el("p", "kicker", ficha.id === "sitio" ? "Leído de js/main.js" : "Texto pegado"));
    card.append(el("h2", "", ficha.name));
    card.append(el("p", "hash", ficha.hash));
    card.append(el("p", "meta", `${fecha(ficha.at)} · ${bytes(ficha.bytes)}`));

    const authorBlock = el("section", "block");
    authorBlock.append(el("p", "field-label", "El autor"));
    authorBlock.append(el("p", "author", ficha.author || "No dejó una frase."));
    card.append(authorBlock);

    const sendBlock = el("section", "block");
    sendBlock.append(el("p", "field-label", "Nombra estos hosts"));
    const sends = rowList(ficha.sends || [], (item) => {
      const li = document.createElement("li");
      li.append(el("strong", "host", item.host));
      li.append(el("span", "", `línea ${item.line}`));
      return li;
    });
    sendBlock.append(sends || el("p", "empty", "No nombra ningún host."));
    card.append(sendBlock);

    const storeBlock = el("section", "block");
    storeBlock.append(el("p", "field-label", "Guarda"));
    const stores = rowList(ficha.stores || [], (item) => {
      const li = document.createElement("li");
      li.append(el("strong", "", item.key ? `${item.api} · ${item.key}` : item.api));
      li.append(el("span", "", `línea ${item.line}`));
      return li;
    });
    storeBlock.append(stores || el("p", "empty", "No guarda en el navegador."));
    card.append(storeBlock);

    if ((ficha.asks || []).length) {
      const askBlock = el("section", "block");
      askBlock.append(el("p", "field-label", "Pide"));
      askBlock.append(
        rowList(ficha.asks, (item) => {
          const li = document.createElement("li");
          li.append(el("strong", "", item.api));
          li.append(el("span", "", `línea ${item.line}`));
          return li;
        })
      );
      card.append(askBlock);
    }

    if ((ficha.mentions || []).length) {
      const mentionBlock = el("section", "block");
      mentionBlock.append(el("p", "field-label", "Solo en comentarios"));
      mentionBlock.append(
        rowList(ficha.mentions, (item) => {
          const li = document.createElement("li");
          li.append(el("strong", "", item.host));
          li.append(el("span", "", `línea ${item.line}`));
          return li;
        })
      );
      card.append(mentionBlock);
    }

    const citeBlock = el("section", "block");
    citeBlock.append(el("p", "field-label", "Citas"));
    if ((ficha.cites || []).length) {
      const list = el("ul", "cites");
      ficha.cites.forEach((cite) => list.append(el("li", "", cite)));
      citeBlock.append(list);
    } else {
      citeBlock.append(el("p", "empty", "No hay una línea para citar."));
    }
    card.append(citeBlock);

    const linkRow = el("div", "link-row");
    const link = document.createElement("input");
    link.readOnly = true;
    link.value = location.href.split("#")[0] + hashFor(ficha);
    link.setAttribute("aria-label", "Link de esta ficha");
    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "ghost";
    copy.textContent = "Copiar";
    copy.addEventListener("click", async () => {
      link.select();
      try {
        await navigator.clipboard.writeText(link.value);
        hint.textContent = "Link copiado.";
      } catch (error) {
        hint.textContent = "El link está seleccionado.";
      }
    });
    linkRow.append(link, copy);
    card.append(linkRow);

    if (ficha.id !== "sitio") {
      const actions = el("div", "card-actions");
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "ghost";
      remove.textContent = "Sacar del registro";
      remove.addEventListener("click", () => {
        fichas = fichas.filter((item) => item.id !== ficha.id);
        save();
        selected = sitio ? "sitio" : fichas[0] ? fichas[0].id : "";
        writeHash();
        render();
      });
      actions.append(remove);
      card.append(actions);
    }
  }

  function render() {
    renderShelf();
    renderCard();
  }

  function hashFor(ficha) {
    if (!ficha) return "";
    if (ficha.id === "sitio") return "#sitio";
    return `#${pack(ficha)}`;
  }

  function writeHash() {
    const ficha = current();
    const next = hashFor(ficha);
    if (location.hash !== next) history.replaceState(null, "", next || location.pathname);
  }

  function pack(ficha) {
    const slim = {
      name: ficha.name,
      author: ficha.author,
      at: ficha.at,
      bytes: ficha.bytes,
      hash: ficha.hash,
      sends: ficha.sends,
      mentions: ficha.mentions,
      stores: ficha.stores,
      asks: ficha.asks,
      cites: ficha.cites,
    };
    const bytesOfText = new TextEncoder().encode(JSON.stringify(slim));
    let binary = "";
    bytesOfText.forEach((value) => {
      binary += String.fromCharCode(value);
    });
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }

  function unpack(token) {
    try {
      const padded = token.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((token.length + 3) % 4);
      const binary = atob(padded);
      const bytesOfText = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
      const data = JSON.parse(new TextDecoder().decode(bytesOfText));
      if (!data || typeof data.hash !== "string" || typeof data.name !== "string") return null;
      data.id = data.hash.slice(0, 12);
      data.sends = data.sends || [];
      data.mentions = data.mentions || [];
      data.stores = data.stores || [];
      data.asks = data.asks || [];
      data.cites = data.cites || [];
      return data;
    } catch (error) {
      return null;
    }
  }

  function adopt(ficha) {
    const existing = fichas.findIndex((item) => item.hash === ficha.hash);
    if (existing >= 0) fichas[existing] = ficha;
    else fichas.unshift(ficha);
    save();
    selected = ficha.id;
    writeHash();
    render();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const source = sourceInput.value;
    if (!source.trim()) {
      hint.textContent = "Pegá un programa.";
      return;
    }
    const made = analyze(source, {
      name: nameInput.value.trim() || "Sin nombre",
      author: authorInput.value.trim(),
      at: today(),
    });
    made.id = made.hash.slice(0, 12);
    adopt(made);
    hint.textContent = "Quedó en el registro de este navegador.";
  });

  document.getElementById("example").addEventListener("click", () => {
    nameInput.value = EXAMPLE.name;
    authorInput.value = EXAMPLE.author;
    sourceInput.value = EXAMPLE.source;
    form.requestSubmit();
  });

  async function readSite() {
    try {
      const response = await fetch("../js/main.js", { cache: "no-store" });
      if (!response.ok) throw new Error(String(response.status));
      const source = await response.text();
      const made = analyze(source, {
        name: "Sitio Puppeteers",
        author: "",
        at: today(),
      });
      made.id = "sitio";
      sitio = made;
      hint.textContent = "La primera ficha es el programa de este sitio.";
    } catch (error) {
      sitio = null;
      hint.textContent = "No pude leer js/main.js. Abrí Ficha desde el sitio, o pegá un programa.";
    }
    if (location.hash && location.hash !== "#sitio") {
      const shared = unpack(location.hash.slice(1));
      if (shared) adopt(shared);
    }
    if (!current()) selected = sitio ? "sitio" : "";
    render();
    writeHash();
  }

  readSite();
})();
