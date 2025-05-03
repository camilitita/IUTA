document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("navbar").innerHTML = data;

          // Now that the navbar is loaded, select elements
          const menu = document.querySelector("#mobile-menu");
          const menuLinks = document.querySelector(".navbar__menu");

          if (menu && menuLinks) {
              menu.addEventListener("click", function () {
                  menu.classList.toggle("is-active");
                  menuLinks.classList.toggle("active");
              });
          }
      });
});
