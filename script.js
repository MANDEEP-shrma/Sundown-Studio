const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// we can assign our custom made attributes to the tags and store some info there

var elemC = document.querySelector("#elem-container");
var fixedImg = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function () {
  fixedImg.style.display = "block";
});

elemC.addEventListener("mouseleave", function () {
  fixedImg.style.display = "none";
});

var elems = document.querySelectorAll(".elem");

for (let elem of elems) {
  elem.addEventListener("mouseenter", function () {
    var image = elem.getAttribute("data-image");
    fixedImg.style.backgroundImage = `url(${image})`;
  });
}
