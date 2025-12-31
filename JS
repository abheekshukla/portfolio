function togglemenu() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " nav--open";
    } else {
      x.className = "nav";
    }
    var element = document.getElementById("menu-toggle");
    element.classList.toggle("menu-toggle--open");
  }
const tile = document.querySelector(".tile");

tile.addEventListener("mousemove", (e) => {
  const rect = tile.getBoundingClientRect();

  const x = e.clientX - rect.left;   // mouse X inside tile
  const y = e.clientY - rect.top;    // mouse Y inside tile

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 15;
  const rotateY = (x - centerX) / 15;

  tile.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

tile.addEventListener("mouseleave", () => {
  tile.style.transform = "rotateX(0) rotateY(0)";
});
