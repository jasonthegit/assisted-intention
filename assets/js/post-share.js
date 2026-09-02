(function () {
  var buttons = document.querySelectorAll("[data-share-url]");

  buttons.forEach(function (button) {
    var status = button.querySelector(".post-share-status");
    var defaultLabel = button.getAttribute("aria-label") || "Share this post";
    var defaultTitle = button.getAttribute("title") || defaultLabel;

    function setStatus(message) {
      if (status) {
        status.textContent = message;
      }

      button.setAttribute("aria-label", message || defaultLabel);
      button.setAttribute("title", message || defaultTitle);

      if (message) {
        window.setTimeout(function () {
          if (status) {
            status.textContent = "";
          }
          button.setAttribute("aria-label", defaultLabel);
          button.setAttribute("title", defaultTitle);
        }, 1600);
      }
    }

    function copyWithTextarea(url) {
      var textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        return document.execCommand("copy");
      } catch (error) {
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }

    button.addEventListener("click", function () {
      var rawUrl = button.getAttribute("data-share-url") || window.location.href;
      var url = new URL(rawUrl, window.location.origin).href;
      var title = button.getAttribute("data-share-title") || document.title;

      if (navigator.share) {
        navigator.share({ title: title, url: url }).catch(function () {});
        return;
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () {
          setStatus("Copied");
        }).catch(function () {
          setStatus(copyWithTextarea(url) ? "Copied" : "Copy failed");
        });
        return;
      }

      setStatus(copyWithTextarea(url) ? "Copied" : "Copy failed");
    });
  });
})();
