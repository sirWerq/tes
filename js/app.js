slide = 0;
const imgSlide = document.querySelectorAll("#slide .img-container");
const submit = document.querySelector("button[type=submit]");

function slideShow() {
  for (let i = 0; i < imgSlide.length; i++) {
    imgSlide[i].style.display = "none";
  }
  slide++;

  if (slide > imgSlide.length) {
    slide = 1;
  }

  imgSlide[slide - 1].style.display = "block";
  setTimeout(slideShow, 3000);
}

slideShow();

submit.addEventListener("click", () => {
  alert("data sent successfully");
});
