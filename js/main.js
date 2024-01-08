const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// document.addEventListener('DOMContentLoaded', function () {
//   const menuToggle = document.getElementById('menuToggle');
//   const navList = document.querySelector('.nav__list');

//   menuToggle.addEventListener('click', function () {
//     navList.classList.toggle('active'); // Add or remove class for menu animation
//     menuToggle.classList.toggle('cross'); // Toggle the class for the cross image
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.querySelector(".nav__list");

  menuToggle.addEventListener("click", function (event) {
    navList.classList.toggle("active");
    menuToggle.classList.toggle("cross");
  });

  navList.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
