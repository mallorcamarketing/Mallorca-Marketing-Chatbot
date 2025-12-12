import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

/* Base Styles von n8n */
const baseStyle = document.createElement('link');
baseStyle.rel = 'stylesheet';
baseStyle.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
document.head.appendChild(baseStyle);

/* Dein Custom CSS */
const theme = document.createElement('link');
theme.rel = 'stylesheet';
theme.href = 'https://raw.githubusercontent.com/mallorcamarketing/Mallorca-Marketing-Chatbot/main/chat.css';
document.head.appendChild(theme);

/* Chat starten */
createChat({
  webhookUrl: 'https://oliverblum.app.n8n.cloud/webhook/5cada43d-1422-4141-80a0-ca7af80b484d/chat',
  mode: 'window',
  defaultLanguage: 'de',
  showWelcomeScreen: false,
  loadPreviousSession: true,
  initialMessages: [
    'Hallo! 👋',
    'Ich bin MallorcaGuru. Wie kann ich dir weiterhelfen?'
  ],
  i18n: {
    de: {
      title: 'Willkommen! 👋',
      subtitle: 'Starte einen Chat – wir helfen dir 24/7.',
      getStarted: 'Neuer Chat',
      inputPlaceholder: 'Stell deine Frage…'
    }
  }
});
