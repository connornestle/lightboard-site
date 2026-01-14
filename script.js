const cards = {
  ArrowLeft: document.getElementById("prosecutor"),
  ArrowUp: document.getElementById("witness"),   // ↑ Witness
  ArrowDown: document.getElementById("judge"),   // ↓ Judge
  ArrowRight: document.getElementById("defense"),
};

function setActive(el) {
  // remove active from all
  Object.values(cards).forEach(card => {
    card.classList.remove("active");
    card.setAttribute("aria-pressed", "false");
  });

  // add active to chosen
  el.classList.add("active");
  el.setAttribute("aria-pressed", "true");
}

// Arrow key controls
document.addEventListener("keydown", (event) => {
  if (cards[event.key]) {
    event.preventDefault(); // stops page scrolling
    setActive(cards[event.key]);
  }
});

// Click / tap controls
Object.values(cards).forEach(card => {
  card.addEventListener("click", () => setActive(card));
});
