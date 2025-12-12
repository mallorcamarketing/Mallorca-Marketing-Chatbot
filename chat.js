import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

const botId = document.currentScript?.dataset?.bot || "default";

const BOTS = {
  default: {
    webhookUrl: "https://oliverblum.app.n8n.cloud/webhook/5cada43d-1422-4141-80a0-ca7af80b484d/chat",
    title: "Mallorca Marketing",
    subtitle: "KI-Chatbot",
  },
};

const style = document.createElement("link");
style.rel = "stylesheet";
style.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
document.head.appendChild(style);

createChat({
  webhookUrl: BOTS[botId].webhookUrl,
  title: BOTS[botId].title,
  subtitle: BOTS[botId].subtitle,
  initialMessages: ["👋 Hi! Wie kann ich dir helfen?"],
  position: "bottom-right",
  showCloseButton: true,
});


