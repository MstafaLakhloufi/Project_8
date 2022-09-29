let toggler = document.querySelector(".menu-icon");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

let sectionThree = document.querySelector(".three");
let sectionFour = document.querySelector(".four");
let spans = document.querySelectorAll(".progress span");
let nums = document.querySelector(".nums");
let started = false; //Function Started ? No

let up = document.querySelector(".up");

toggler.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};

document.onkeyup = function (e) {
  if(e.key === "Escape") {
    nav.classList.remove("open");
  }
}


window.onscroll = function () {
  if (this.scrollY >= sectionThree.offsetTop - 250) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (this.scrollY >= sectionFour.offsetTop - 250) {
    if(!started) {
      [...nums.children].forEach((num) => startCount(num));
    }
    started = true;
  }
  this.scrollY >= 500 ? up.classList.add("show") : up.classList.remove("show");
};

up.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);