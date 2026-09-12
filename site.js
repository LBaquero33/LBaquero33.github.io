document.querySelectorAll("[data-motion-toggle]").forEach((button) => {
  const image = document.getElementById(button.dataset.motionToggle);
  if (!image) return;

  const animatedSource = image.dataset.animatedSource;
  const stillSource = image.dataset.stillSource;
  let playing = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const render = () => {
    image.src = playing ? animatedSource : stillSource;
    button.textContent = playing ? "Pause animation" : "Play animation";
    button.setAttribute("aria-pressed", String(playing));
  };

  render();
  button.addEventListener("click", () => {
    playing = !playing;
    render();
  });
});
