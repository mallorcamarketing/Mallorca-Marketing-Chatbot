import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

/* Default CSS laden */
const baseStyle = document.createElement("link");
baseStyle.rel = "stylesheet";
baseStyle.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
document.head.appendChild(baseStyle);

/* Chat starten */
createChat({
  webhookUrl: "https://oliverblum.app.n8n.cloud/webhook/5cada43d-1422-4141-80a0-ca7af80b484d/chat",

  webhookConfig: {
    method: "POST",
    headers: {},
  },

  mode: "window",
  loadPreviousSession: true,
  showWelcomeScreen: false,
  defaultLanguage: "de",

  initialMessages: [
    "Hallo! 👋",
    "Ich bin MallorcaGuru. Wie kann ich dir weiterhelfen?",
  ],

  i18n: {
    de: {
      title: "Willkommen! 👋",
      subtitle: "Starte einen Chat, Wir helfen dir 24/7.",
      footer: "",
      getStarted: "Neuer Chat",
      inputPlaceholder: "Stell deine Frage…",
    },
  },

  enableStreaming: false,
});



