/*
  TUTORIAL: textos por idioma
  Cada clave de data-i18n en el HTML debe existir aqui (al menos en "en" y "es").
  Los demas idiomas copian ingles o espanol y reemplazan las frases propias.

  Juego nuevo (ejemplo):
    HTML: <p data-i18n="game2.blurb">...</p>
    Aqui, dentro de en y de es:
      "game2.status": "coming soon" / "proximamente",
      "game2.blurb": "English description." / "Descripcion en espanol.",

  Devlog nuevo (ejemplo):
    HTML: <h2 data-i18n="devlog1.title">...</h2>
          <p data-i18n="devlog1.text">...</p>
    Aqui:
      "devlog1.title": "Title" / "Titulo",
      "devlog1.text": "Note in English." / "Nota en espanol.",

  Si el texto es igual en los dos idiomas (nombres propios), no hace falta data-i18n.
*/
const i18n = {
  en: {
    "nav.home": "HOME",
    "nav.games": "OUR GAMES",
    "nav.devlogs": "DEVLOGS >",
    "nav.contact": "CONTACT US",
    "hero.we": "WE ARE",
    "hero.title": "WE ARE PUPPETEERS DEVS.",
    "hero.lead":
      "We are Puppeteers, an independent game development studio based in Chile. We create dark-themed experiences where puppets are at the core of our stories.",
    "latest.label": "OUR GAMES",
    "game.status": "coming soon",
    "game.wishlist": "WISHLIST ON STEAM",
    "game.pressKit": "PRESS KIT",
    "game.viewSteam": "STEAM",
    "game.viewItch": "ITCH.IO",
    "game.blurb":
      "Puppetsite is a narrative psychological horror game. An unsettling puppet clings to your arm. Find a way to free yourself... but do not wake it. It could be the end for you.",
    "upcoming.title": "COMING SOON",
    "upcoming.blurb": "Another string is being pulled in the workshop. We will tug when it is time.",
    "contact.tab": "CONTACT US",
    "contact.title": "CONTACT US",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "SEND",
    "contact.ok": "Message sent!",
    "contact.okNext": "We will contact you in the coming days.",
    "contact.err": "Could not send. Please try again.",
    "footer.made": "Page created by",
    "games.title": "OUR GAMES",
    "games.lead": "Things we built. Things that still twitch.",
    "devlogs.title": "DEVLOGS",
    "newsletter.title": "NEWSLETTER",
    "newsletter.lead": "New games and notes from the workshop, in your inbox.",
    "newsletter.placeholder": "Your email",
    "newsletter.send": "SUBSCRIBE",
    "newsletter.ok": "You are in. We will tug the string when there is news.",
    "newsletter.needSetup": "The newsletter is not connected yet. Create a free MailerLite form and paste the URL in js/main.js.",
    "logo.newsletter": "Subscribe to our newsletter",
    "logo.hint": "Newsletter",
  },
  es: {
    "nav.home": "INICIO",
    "nav.games": "NUESTROS JUEGOS",
    "nav.devlogs": "DEVLOGS >",
    "nav.contact": "CONTÁCTANOS",
    "hero.we": "SOMOS",
    "hero.title": "SOMOS PUPPETEERS DEVS.",
    "hero.lead":
      "Somos Puppeteers, un estudio independiente de desarrollo de videojuegos con base en Chile. Creamos experiencias de temática oscura en las que los títeres están en el centro de nuestras historias.",
    "latest.label": "NUESTROS JUEGOS",
    "game.status": "próximamente",
    "game.wishlist": "WISHLIST EN STEAM",
    "game.pressKit": "PRESS KIT",
    "game.viewSteam": "STEAM",
    "game.viewItch": "ITCH.IO",
    "game.blurb":
      "Puppetsite es un juego de terror psicológico narrativo. Un inquietante títere se aferra a tu brazo. Encuentra la forma de liberarte... pero no lo despiertes. Podría ser el fin para ti.",
    "upcoming.title": "PRÓXIMAMENTE",
    "upcoming.blurb": "Otra cuerda se está tensando en el taller. Tiraremos del hilo cuando llegue el momento.",
    "contact.tab": "CONTÁCTANOS",
    "contact.title": "CONTÁCTANOS",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.message": "Mensaje",
    "contact.send": "ENVIAR",
    "contact.ok": "¡Mensaje enviado!",
    "contact.okNext": "Te contactaremos en los próximos días.",
    "contact.err": "No se pudo enviar. Inténtalo de nuevo.",
    "footer.made": "Página creada por",
    "games.title": "NUESTROS JUEGOS",
    "games.lead": "Cosas que construimos. Cosas que todavía se retuercen.",
    "devlogs.title": "DEVLOGS",
    "newsletter.title": "NEWSLETTER",
    "newsletter.lead": "Nuevos juegos y notas del taller, en tu correo.",
    "newsletter.placeholder": "Tu correo",
    "newsletter.send": "SUSCRIBIRSE",
    "newsletter.ok": "Listo, ya estás dentro. Te avisamos cuando haya novedades.",
    "newsletter.needSetup": "El newsletter aún no está conectado. Crea un formulario gratis en MailerLite y pega la URL en js/main.js.",
    "logo.newsletter": "Suscríbete a nuestro newsletter",
    "logo.hint": "Newsletter",
  },
};

i18n.de = Object.assign({}, i18n.en, {
  "nav.home": "START",
  "nav.games": "UNSERE SPIELE",
  "nav.contact": "KONTAKT",
  "hero.we": "WIR SIND",
  "hero.lead":
    "Wir sind Puppeteers, ein unabhängiges Spieleentwicklungsstudio aus Chile. Wir erschaffen düstere Erlebnisse, in denen Puppen im Zentrum unserer Geschichten stehen.",
  "latest.label": "UNSERE SPIELE",
  "game.status": "demnächst",
  "game.wishlist": "WUNSCHLISTE AUF STEAM",
  "game.pressKit": "PRESS KIT",
  "game.viewSteam": "STEAM",
  "game.viewItch": "ITCH.IO",
  "game.blurb":
    "Puppetsite ist ein narratives psychologisches Horrorspiel. Eine unheimliche Puppe klammert sich an deinen Arm. Befreie dich... aber wecke sie nicht. Das könnte dein Ende sein.",
  "contact.title": "KONTAKT",
  "contact.name": "Name",
  "contact.email": "E-Mail",
  "contact.message": "Nachricht",
  "contact.send": "SENDEN",
  "contact.ok": "Nachricht gesendet!",
  "contact.okNext": "Wir melden uns in den nächsten Tagen.",
  "contact.err": "Senden fehlgeschlagen. Bitte erneut versuchen.",
  "footer.made": "Seite erstellt von",
  "logo.hint": "Newsletter",
  "games.title": "UNSERE SPIELE",
  "games.lead": "Dinge, die wir gebaut haben. Dinge, die noch zucken.",
  "newsletter.lead": "Neue Spiele und Notizen aus der Werkstatt, in deinem Postfach.",
  "newsletter.placeholder": "Deine E-Mail",
  "newsletter.send": "ABONNIEREN",
  "newsletter.ok": "Du bist dabei. Wir ziehen am Faden, wenn es Neuigkeiten gibt.",
});

i18n.fr = Object.assign({}, i18n.en, {
  "nav.home": "ACCUEIL",
  "nav.games": "NOS JEUX",
  "nav.contact": "CONTACT",
  "hero.we": "NOUS SOMMES",
  "hero.lead":
    "Nous sommes Puppeteers, un studio indépendant de jeux vidéo basé au Chili. Nous créons des expériences sombres où les marionnettes sont au cœur de nos histoires.",
  "latest.label": "NOS JEUX",
  "game.status": "bientôt",
  "game.wishlist": "LISTE DE SOUHAITS STEAM",
  "game.pressKit": "PRESS KIT",
  "game.viewSteam": "STEAM",
  "game.viewItch": "ITCH.IO",
  "game.blurb":
    "Puppetsite est un jeu d'horreur psychologique narratif. Une marionnette troublante s'accroche à ton bras. Libère-toi... mais ne la réveille pas. Ce pourrait être ta fin.",
  "contact.title": "CONTACTEZ-NOUS",
  "contact.name": "Nom",
  "contact.email": "E-mail",
  "contact.message": "Message",
  "contact.send": "ENVOYER",
  "contact.ok": "Message envoyé !",
  "contact.okNext": "Nous vous contacterons dans les prochains jours.",
  "contact.err": "Envoi impossible. Réessaie.",
  "footer.made": "Page créée par",
  "logo.hint": "Newsletter",
  "games.title": "NOS JEUX",
  "games.lead": "Des choses que nous avons bâties. Des choses qui bougent encore.",
  "newsletter.lead": "Nouveaux jeux et notes de l'atelier, dans ta boîte mail.",
  "newsletter.placeholder": "Ton e-mail",
  "newsletter.send": "S'ABONNER",
  "newsletter.ok": "C'est bon, tu es dedans. On tire le fil dès qu'il y a du nouveau.",
});

i18n.it = Object.assign({}, i18n.en, {
  "nav.home": "HOME",
  "nav.games": "I NOSTRI GIOCHI",
  "nav.contact": "CONTATTI",
  "hero.we": "SIAMO",
  "hero.lead":
    "Siamo Puppeteers, uno studio indipendente di videogiochi con sede in Cile. Creiamo esperienze oscure in cui le marionette sono al centro delle nostre storie.",
  "latest.label": "I NOSTRI GIOCHI",
  "game.status": "prossimamente",
  "game.wishlist": "WISHLIST SU STEAM",
  "game.pressKit": "PRESS KIT",
  "game.viewSteam": "STEAM",
  "game.viewItch": "ITCH.IO",
  "game.blurb":
    "Puppetsite è un horror psicologico narrativo. Un inquietante pupazzo si aggrappa al tuo braccio. Liberati... ma non svegliarlo. Potrebbe essere la tua fine.",
  "contact.title": "CONTATTACI",
  "contact.name": "Nome",
  "contact.email": "Email",
  "contact.message": "Messaggio",
  "contact.send": "INVIA",
  "contact.ok": "Messaggio inviato!",
  "contact.okNext": "Ti contatteremo nei prossimi giorni.",
  "contact.err": "Invio non riuscito. Riprova.",
  "footer.made": "Pagina creata da",
  "logo.hint": "Newsletter",
  "games.title": "I NOSTRI GIOCHI",
  "games.lead": "Cose che abbiamo costruito. Cose che ancora si muovono.",
  "newsletter.lead": "Nuovi giochi e note dal laboratorio, nella tua casella.",
  "newsletter.placeholder": "La tua email",
  "newsletter.send": "ISCRIVITI",
  "newsletter.ok": "Sei dentro. Tiriamo il filo quando ci sono novità.",
});

i18n.ja = Object.assign({}, i18n.en, {
  "nav.home": "ホーム",
  "nav.games": "ゲーム",
  "nav.contact": "お問い合わせ",
  "hero.we": "私たちは",
  "hero.lead":
    "私たちはチリを拠点とするインディーゲームスタジオ、Puppeteersです。人形を物語の中心に据えた、暗いテーマの体験をつくります。",
  "latest.label": "ゲーム",
  "game.status": "近日公開",
  "game.wishlist": "STEAMでウィッシュリスト",
  "game.pressKit": "PRESS KIT",
  "game.viewSteam": "STEAM",
  "game.viewItch": "ITCH.IO",
  "game.blurb":
    "Puppetsiteは物語型のサイコロジカルホラーです。不気味な人形が腕にしがみつきます。抜け出してください…でも起こさないで。それが終わりになるかもしれません。",
  "contact.title": "お問い合わせ",
  "contact.name": "名前",
  "contact.email": "メール",
  "contact.message": "メッセージ",
  "contact.send": "送信",
  "contact.ok": "送信しました！",
  "contact.okNext": "数日以内にご連絡します。",
  "contact.err": "送信できませんでした。もう一度試してください。",
  "footer.made": "ページ制作",
  "logo.hint": "Newsletter",
  "games.title": "ゲーム",
  "games.lead": "つくったもの。まだ動いているもの。",
  "newsletter.lead": "新作と工房からのメモをメールで。",
  "newsletter.placeholder": "メールアドレス",
  "newsletter.send": "登録",
  "newsletter.ok": "登録完了。ニュースがあれば糸を引きます。",
});

i18n.pt = Object.assign({}, i18n.es, {
  "nav.home": "INÍCIO",
  "nav.games": "NOSSOS JOGOS",
  "nav.contact": "CONTATO",
  "hero.we": "SOMOS",
  "hero.lead":
    "Somos a Puppeteers, um estúdio independente de jogos baseado no Chile. Criamos experiências escuras em que os fantoches estão no centro das nossas histórias.",
  "latest.label": "NOSSOS JOGOS",
  "game.status": "em breve",
  "game.wishlist": "WISHLIST NA STEAM",
  "game.pressKit": "PRESS KIT",
  "game.viewSteam": "STEAM",
  "game.viewItch": "ITCH.IO",
  "game.blurb":
    "Puppetsite é um terror psicológico narrativo. Um fantoche inquietante se agarra ao seu braço. Encontre um jeito de se libertar... mas não o acorde. Pode ser o fim para você.",
  "contact.title": "FALE CONOSCO",
  "contact.name": "Nome",
  "contact.email": "E-mail",
  "contact.message": "Mensagem",
  "contact.send": "ENVIAR",
  "contact.ok": "Mensagem enviada!",
  "contact.okNext": "Entraremos em contato nos próximos dias.",
  "contact.err": "Não foi possível enviar. Tente de novo.",
  "footer.made": "Página criada por",
  "logo.hint": "Newsletter",
  "games.title": "NOSSOS JOGOS",
  "games.lead": "Coisas que construímos. Coisas que ainda se mexem.",
  "newsletter.lead": "Novos jogos e notas da oficina, no seu e-mail.",
  "newsletter.placeholder": "Seu e-mail",
  "newsletter.send": "INSCREVER-SE",
  "newsletter.ok": "Pronto, você está dentro. Avisamos quando houver novidades.",
});

const LANGS = [
  { id: "es", label: "Español", iso: "cl", html: "es" },
  { id: "en", label: "English", iso: "us", html: "en" },
  { id: "pt", label: "Português", iso: "br", html: "pt" },
  { id: "ja", label: "日本語", iso: "jp", html: "ja" },
  { id: "de", label: "Deutsch", iso: "de", html: "de" },
  { id: "fr", label: "Français", iso: "fr", html: "fr" },
  { id: "it", label: "Italiano", iso: "it", html: "it" },
];

function flagMarkup(iso) {
  const code = /^[a-z]{2}$/.test(iso) ? iso : "cl";
  return `<img class="lang-flag-ico" src="https://flagcdn.com/w40/${code}.png" width="22" height="15" alt="" />`;
}

function cleanText(value, max, keepBreaks) {
  let text = String(value || "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
  text = keepBreaks ? text.replace(/[ \t]+\n/g, "\n").trim() : text.replace(/\s+/g, " ").trim();
  return text.slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]{1,64}@[^\s@]{1,255}\.[a-zA-Z]{2,24}$/.test(value);
}

const langRoot = document.querySelector(".lang-switch");
let lang = localStorage.getItem("pd-lang") || "es";
if (lang === "en-gb") lang = "en";
if (!LANGS.some((item) => item.id === lang)) lang = "es";

function t(key) {
  return (i18n[lang] && i18n[lang][key]) || i18n.es[key] || i18n.en[key] || "";
}

function currentLang() {
  return LANGS.find((item) => item.id === lang) || LANGS.find((item) => item.id === "es");
}

function renderLangSwitch() {
  if (!langRoot) return;
  const cur = currentLang();
  langRoot.innerHTML = `
    <div class="lang-dd">
      <button type="button" class="lang-dd-btn" aria-haspopup="listbox" aria-expanded="false" aria-label="${cur.label}">
        ${flagMarkup(cur.iso)}
        <span class="lang-dd-label">${cur.label}</span>
        <svg class="lang-caret" viewBox="0 0 12 12" aria-hidden="true">
          <path fill="currentColor" d="M2.2 4.2 6 8l3.8-3.8 1.1 1.1L6 10.2 1.1 5.3z" />
        </svg>
      </button>
      <div class="lang-dd-menu" role="listbox">
        ${LANGS.map(
          (item) => `
          <button type="button" data-lang="${item.id}" role="option" aria-selected="${item.id === lang ? "true" : "false"}" class="${item.id === lang ? "active" : ""}">
            ${flagMarkup(item.iso)}
            <span>${item.label}</span>
            <svg class="lang-dd-check" viewBox="0 0 12 12" aria-hidden="true">
              <path fill="currentColor" d="M4.7 8.6 2.2 6.1l1.1-1.1 1.4 1.4 4-4 1.1 1.1z" />
            </svg>
          </button>`
        ).join("")}
      </div>
    </div>
  `;

  const dd = langRoot.querySelector(".lang-dd");
  const btn = langRoot.querySelector(".lang-dd-btn");
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = dd.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  langRoot.querySelectorAll("[data-lang]").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      lang = item.dataset.lang;
      applyLang();
    });
  });
}

document.addEventListener("click", () => {
  document.querySelector(".lang-dd")?.classList.remove("open");
  document.querySelectorAll(".logo-pop").forEach((pop) => {
    pop.hidden = true;
  });
  document.querySelectorAll(".logo").forEach((btn) => {
    btn.setAttribute("aria-expanded", "false");
  });
});

function applyLang() {
  const meta = currentLang();
  document.documentElement.lang = meta.html;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.getAttribute("data-i18n"));
    if (value) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = t(el.getAttribute("data-i18n-placeholder"));
    if (value) el.setAttribute("placeholder", value);
  });
  document.querySelectorAll(".logo").forEach((el) => {
    el.setAttribute("aria-label", t("logo.newsletter"));
  });
  localStorage.setItem("pd-lang", lang);
  renderLangSwitch();
}

/*
  CONTACTO (Web3Forms -> puppeteers.devs@gmail.com)
  FormSubmit se descarto: el link de activacion suele salir invalido.

  1. Entra a https://web3forms.com/
  2. Pon el correo puppeteers.devs@gmail.com y crea el Access Key.
  3. Te llega un mail con una clave tipo 8f3c... (NO un link de activar).
  4. Pegala abajo, entre las comillas de CONTACT_ACCESS_KEY.
  5. Recarga la pagina. Anade notify@web3forms.com a contactos para que no caiga en spam.
*/
const CONTACT_MAIL = "puppeteers.devs@gmail.com";
const CONTACT_ACCESS_KEY = "0ccc3c55-4fa7-47cc-b2bb-3f7d49530a99";
let lastContactAt = 0;
let contactSentTimer = 0;

function restoreContactForm() {
  window.clearTimeout(contactSentTimer);
  contactSentTimer = 0;
  const form = document.getElementById("contactForm");
  const ok = document.getElementById("formOk");
  form?.classList.remove("is-sent");
  if (ok) ok.hidden = true;
}

function showContactSent() {
  const form = document.getElementById("contactForm");
  const ok = document.getElementById("formOk");
  if (!form) return;
  form.classList.add("is-sent");
  if (ok) ok.hidden = false;
  form.reset();
  window.clearTimeout(contactSentTimer);
  contactSentTimer = window.setTimeout(restoreContactForm, 3000);
}

document.getElementById("contactForm")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.target;
  const ok = document.getElementById("formOk");
  const err = document.getElementById("formErr");
  const btn = form.querySelector('button[type="submit"]');
  const isBot = form.querySelector('[name="botcheck"]')?.checked;

  if (form.classList.contains("is-sent")) {
    event.preventDefault();
    return;
  }

  restoreContactForm();
  if (err) err.hidden = true;

  if (isBot) {
    showContactSent();
    return;
  }

  const name = cleanText(form.querySelector('[name="name"]')?.value, 80);
  const email = cleanText(form.querySelector('[name="email"]')?.value, 120).toLowerCase();
  const message = cleanText(form.querySelector('[name="message"]')?.value, 2000, true);

  if (name.length < 2 || !isEmail(email) || message.length < 8) {
    if (err) err.hidden = false;
    return;
  }

  const now = Date.now();
  if (now - lastContactAt < 15000) {
    if (err) err.hidden = false;
    return;
  }

  if (!CONTACT_ACCESS_KEY) {
    const subject = encodeURIComponent(`Contacto web — ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_MAIL}?subject=${subject}&body=${body}`;
    return;
  }

  if (btn) btn.disabled = true;

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: CONTACT_ACCESS_KEY,
        name,
        email,
        message,
        subject: "Nuevo mensaje — Puppeteers Devs",
        from_name: "Sitio Puppeteers Devs",
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success !== true) {
      throw new Error(data.message || "send failed");
    }
    lastContactAt = Date.now();
    showContactSent();
  } catch (error) {
    if (err) err.hidden = false;
  } finally {
    if (btn) btn.disabled = false;
  }
});

/*
  NEWSLETTER (MailerLite, plan gratis)
  1. Entra a https://www.mailerlite.com y crea una cuenta (puede ser puppeteers.devs@gmail.com).
  2. Sitios web / Forms / Crear formulario / Embedded (embebido).
  3. En el codigo HTML busca action="https://assets.mailerlite.com/jsonp/..../subscribe"
  4. Copia esa URL completa y pegala abajo, entre las comillas.
  5. Recarga la web. Quien se suscriba aparece en tu lista de MailerLite.
     Desde ahi envias los boletines. No hace falta una base de datos propia.
*/
const NEWSLETTER_ACTION = "https://dashboard.mailerlite.com/jsonp/2624441/forms/198109099129308839/subscribe";

document.querySelectorAll(".newsletter-form").forEach((form) => {
  const box = form.closest(".newsletter, .logo-pop");
  const need = box?.querySelector(".newsletter-need");
  const ok = box?.querySelector(".newsletter-ok");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = cleanText(form.querySelector('input[type="email"]')?.value, 120).toLowerCase();
    if (!isEmail(email)) return;
    if (!NEWSLETTER_ACTION.startsWith("https://dashboard.mailerlite.com/")) return;

    const params = new URLSearchParams();
    params.set("fields[email]", email);
    params.set("ml-submit", "1");
    params.set("anticsrf", "true");

    const script = document.createElement("script");
    script.src = `${NEWSLETTER_ACTION}?${params.toString()}`;
    script.onload = () => script.remove();
    script.onerror = () => script.remove();
    document.body.appendChild(script);

    if (ok) ok.hidden = false;
    if (need) need.hidden = true;
    form.reset();
  });
});

applyLang();

(function setupFeaturedCarousel() {
  const card = document.querySelector(".game-card.featured");
  if (!card) return;
  const track = card.querySelector(".featured-track");
  const slides = card.querySelectorAll(".featured-slide");
  const dots = card.querySelectorAll(".game-dots button");
  if (!track || slides.length < 2) return;
  let index = 0;

  function go(next) {
    index = (next + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle("on", active);
      if (active) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  card.querySelector(".game-nav.prev")?.addEventListener("click", () => go(index - 1));
  card.querySelector(".game-nav.next")?.addEventListener("click", () => go(index + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => go(i)));
  go(0);
})();

(function setupLogoNewsletter() {
  const wraps = document.querySelectorAll(".logo-wrap");
  if (!wraps.length) return;

  function shake() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll(".logo").forEach((logo) => {
      logo.classList.remove("shake");
      void logo.offsetWidth;
      logo.classList.add("shake");
    });
  }

  function showHint() {
    wraps.forEach((wrap) => {
      const pop = wrap.querySelector(".logo-pop");
      const hint = wrap.querySelector(".logo-hint");
      if (!hint || (pop && !pop.hidden)) return;
      hint.classList.add("show");
      window.setTimeout(() => hint.classList.remove("show"), 4200);
    });
  }

  function nudge() {
    shake();
    showHint();
  }

  setTimeout(nudge, 3000);
  setInterval(nudge, 15000);

  wraps.forEach((wrap) => {
    const btn = wrap.querySelector(".logo");
    const pop = wrap.querySelector(".logo-pop");
    if (!btn || !pop) return;

    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = pop.hidden;
      document.querySelectorAll(".logo-pop").forEach((other) => {
        other.hidden = true;
      });
      document.querySelectorAll(".logo").forEach((other) => {
        other.setAttribute("aria-expanded", "false");
      });
      pop.hidden = !open;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      wrap.querySelector(".logo-hint")?.classList.remove("show");
      if (open) pop.querySelector('input[type="email"]')?.focus();
    });

    pop.addEventListener("click", (event) => event.stopPropagation());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.querySelectorAll(".logo-pop").forEach((pop) => {
      pop.hidden = true;
    });
    document.querySelectorAll(".logo").forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
    });
  });
})();
