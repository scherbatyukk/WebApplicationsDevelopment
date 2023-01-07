let infoVisibility = false
let expectationVisibility = false
let experienceVisibility = false

const changeInfoVisibility = () => {
  if (infoVisibility) {
    document.getElementById("infoBox").style.display = "none";
    document.getElementById("infoButton").innerHTML = "More";
  } else {
    document.getElementById("infoBox").style.display = "block";
    document.getElementById("infoButton").innerHTML = "Less";
  }
  infoVisibility = !infoVisibility
}

const changeExpectationVisibility = () => {
  if (expectationVisibility) {
    document.getElementById("expectationBox").style.display = "none";
    document.getElementById("expectationButton").innerHTML = "More";
  } else {
    document.getElementById("expectationBox").style.display = "block";
    document.getElementById("expectationButton").innerHTML = "Less";
  }
  expectationVisibility = !expectationVisibility
}

const changeExperienceVisibility = () => {
  if (experienceVisibility) {
    document.getElementById("experienceBox").style.display = "none";
    document.getElementById("experienceButton").innerHTML = "More";
  } else {
    document.getElementById("experienceBox").style.display = "block";
    document.getElementById("experienceButton").innerHTML = "Less";
  }
  experienceVisibility = !experienceVisibility
}

let slideIndex = 0
showSlides()

function showSlides() {
  let i
  let slides = document.getElementsByClassName("mySlides")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex++
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block"
  setTimeout(showSlides, 5000)
}