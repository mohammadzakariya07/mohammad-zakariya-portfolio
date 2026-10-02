document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const cards = document.querySelectorAll(".identity-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      if (window.innerWidth < 700) return;

      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
      const y = ((e.clientY - r.top) / r.height - 0.5) * -10;

      let base = "";
      if (card.classList.contains("card-left")) {
        base = "translateX(-145px) rotateZ(-7deg)";
      } else if (card.classList.contains("card-right")) {
        base = "translateX(145px) rotateZ(7deg)";
      }

      card.style.transform = `${base} translateY(-8px) rotateY(${x}deg) rotateX(${y}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  // Smoothly close the mobile menu if one is added later.
  document.querySelectorAll(".nav nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
    });
  });
});
