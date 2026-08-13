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

  document.querySelectorAll(".media img").forEach(function (img) {
    const media = img.closest(".media");
    if (!media) return;

    const show = function () {
      if (img.naturalWidth > 0) media.classList.add("has-image");
    };

    img.addEventListener("load", show);
    img.addEventListener("error", function () {
      media.classList.remove("has-image");
    });

    if (img.complete) {
      if (img.naturalWidth > 0) show();
      else media.classList.remove("has-image");
    }
  });
})();
