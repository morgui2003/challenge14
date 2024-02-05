import User from "./User.js";
import Conversation from "./Conversation.js";

const lele = new User("Lele");
const morgui = new User("Morgui");
const rion = new User("Rion");

const conv1 = new Conversation();
const conv2 = new Conversation();

conv1.addUsers([lele, morgui]);
conv2.addUsers([lele, rion]);

lele.sendMessage(conv1, "Coucou morgs, Rion a fait un album, tu veux écouter ?", lele);
morgui.sendMessage(conv1, "Non.", lele);

rion.sendMessage(conv2, "Salut lele, morgui a aimé ?", lele);
lele.sendMessage(conv2, "Oui bien sûr !", lele);

let currentConversation = conv1;

function switchConversation(newConv) {
  currentConversation = newConv;
  document.querySelector(".conversation").innerHTML = ""; // Nettoyer l'affichage actuel
  currentConversation.messages.forEach(message => message.display(lele)); // Afficher les messages de la nouvelle conversation
}

// Création de l'interface de sélection de conversation
function createConversationSwitcher() {
  const switcher = document.createElement("div");
  switcher.className = "switcher";

  const btnConv1 = document.createElement("button");
  btnConv1.textContent = "Conversation 1";
  btnConv1.onclick = () => switchConversation(conv1);

  const btnConv2 = document.createElement("button");
  btnConv2.textContent = "Conversation 2";
  btnConv2.onclick = () => switchConversation(conv2);

  switcher.appendChild(btnConv1);
  switcher.appendChild(btnConv2);

  document.body.insertBefore(switcher, document.body.firstChild);
}

// Appel des fonctions pour initialiser l'interface
createConversationSwitcher();
switchConversation(conv1); // Définir la conversation initiale