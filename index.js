let pageHeight = window.innerHeight;

let scrollButtons = document.querySelectorAll("button[class^=scroll]");

for (let i = 0; i < scrollButtons.length; i++) {
  scrollButtons[i].addEventListener("click", () => {
    window.scrollBy(0, pageHeight);
  });
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

function initMap() {
  // ktu eshte fshnjaaaaa
  const fshn = { lat: 41.334458, lng: 19.816468 };
  // The map, centered at fshnn
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: fshn,
  });
  // The marker, positioned at fshn
  const marker = new google.maps.Marker({
    position: fshn,
    map: map,
  });
}

window.initMap = initMap;
