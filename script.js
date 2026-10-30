// Configuração central do atendimento da Brownie das Leticia’s.
const WHATSAPP_NUMBER = "5535991442169";

function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Mensagem geral aplicada aos botões de atendimento.
const generalMessage = "Olá! Conheci a Brownie das Leticia’s pelo site e gostaria de conhecer o cardápio e fazer um pedido!";
document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = createWhatsAppLink(generalMessage);
});

// Cada produto abre uma conversa com o nome e o preço correspondentes.
document.querySelectorAll(".product-order").forEach((link) => {
  const product = link.dataset.product;
  const price = link.dataset.price;
  const message = `Olá! Gostaria de pedir o ${product} da Brownie das Leticia’s, no valor de ${price}.`;
  link.href = createWhatsAppLink(message);
});

// Menu mobile acessível.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  mainNav.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

// Atualiza o ano automaticamente no rodapé.
document.querySelector("#current-year").textContent = new Date().getFullYear();

// Revela as seções suavemente durante a rolagem, com fallback para navegadores antigos.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
