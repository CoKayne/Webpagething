(function () {
  const nav = document.getElementById("nav");
  const toggle = document.querySelector(".menu-btn");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll(".media").forEach(function (media) {
    const imgs = Array.from(media.querySelectorAll("img"));
    if (!imgs.length) return;

    const sync = function () {
      const ok = imgs.some(function (img) {
        return img.naturalWidth > 0;
      });
      media.classList.toggle("has-image", ok);
    };

    imgs.forEach(function (img) {
      img.addEventListener("load", sync);
      img.addEventListener("error", sync);
      if (img.complete) sync();
    });
  });
})();
