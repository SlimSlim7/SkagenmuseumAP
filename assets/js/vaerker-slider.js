// JS – sørg for DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
    const malere = {
      kroyer: {
        værker1: "./assets/img/sommeraften_ved_skagen.webp",
        værker2: "./assets/img/sommeraften_paa_skagen_sonderstrand.webp",
        værker3: "./assets/img/roser.webp",
        værker4: "./assets/img/holger-drachmann-kroyer.webp",
        værker5: "./assets/img/frokosten.webp",
        værker6: "./assets/img/frokosten.webp"
      }
    };
  
    const m = malere.kroyer;
  
    for (let i = 1; i <= 6; i++) {
      const img = document.getElementById(`værker${i}`);
      if (img) img.src = m[`værker${i}`];
    }
  });
  

  
  
  // Slider logik (som du har)
  

// slider for værkerne



// Slider for værkerne – kun aktiver hvis containeren findes
const container = document.querySelector(".værker-container");
const leftArrow = document.querySelector(".pil-left");
const rightArrow = document.querySelector(".pil-right");

if (container && leftArrow && rightArrow) {
  let scrollPosition = 0;
  const scrollAmount = 320; // Tilpas til dine billeder + gap

  const totalItems = container.children.length;
  const containerWidth = container.parentElement.offsetWidth;
  const itemWidth = scrollAmount;
  const maxScroll = -(itemWidth * totalItems - containerWidth);

  function updateButtons() {
    leftArrow.style.opacity = scrollPosition >= 0 ? 0.3 : 1;
    leftArrow.style.pointerEvents = scrollPosition >= 0 ? 'none' : 'auto';

    rightArrow.style.opacity = scrollPosition <= maxScroll ? 0.3 : 1;
    rightArrow.style.pointerEvents = scrollPosition <= maxScroll ? 'none' : 'auto';
  }

  rightArrow.addEventListener("click", () => {
    scrollPosition -= scrollAmount;
    if (scrollPosition < maxScroll) scrollPosition = maxScroll;
    container.style.transform = `translateX(${scrollPosition}px)`;
    updateButtons();
  });

  leftArrow.addEventListener("click", () => {
    scrollPosition += scrollAmount;
    if (scrollPosition > 0) scrollPosition = 0;
    container.style.transform = `translateX(${scrollPosition}px)`;
    updateButtons();
  });

  updateButtons();
}








