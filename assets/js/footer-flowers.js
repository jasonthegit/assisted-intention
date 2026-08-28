(function () {
  if (!document.body.classList.contains("layout-post")) {
    return;
  }

  var choices = [
    "/assets/images/backgrounds/blog-bottom-flowers-1-transparent.png",
    "/assets/images/backgrounds/blog-bottom-flowers-2-transparent.png",
    "/assets/images/backgrounds/blog-bottom-flowers-3-transparent.png",
    "/assets/images/backgrounds/blog-bottom-flowers-4-transparent.png",
    "/assets/images/backgrounds/blog-bottom-flowers-5-transparent.png"
  ];
  var selected = choices[Math.floor(Math.random() * choices.length)];
  var main = document.querySelector(".site-main");

  if (main) {
    main.style.backgroundImage = 'url("' + selected + '")';
  }
})();
