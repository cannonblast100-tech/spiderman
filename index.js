// ===========================
// EXPLORE NEW YORK BUTTON
// ===========================

const exploreBtn =
document.getElementById("exploreBtn");

if(exploreBtn){

exploreBtn.addEventListener("click", () => {

window.location.href =
"newyork.html";

});

}

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

window.addEventListener("scroll", () => {

const nav =
document.querySelector("nav");

if(window.scrollY > 50){

nav.style.background =
"rgba(0,0,0,0.95)";

nav.style.boxShadow =
"0 0 20px rgba(230,36,41,.3)";

}
else{

nav.style.background =
"rgba(0,0,0,0.8)";

nav.style.boxShadow =
"none";

}

});

// ===========================
// STATS COUNTER ANIMATION
// ===========================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target =
+counter.getAttribute("data-target");

const current =
+counter.innerText;

const increment =
target / 100;

if(current < target){

counter.innerText =
Math.ceil(current + increment);

setTimeout(updateCounter,20);

}
else{

counter.innerText = target;

}

};

updateCounter();

});

// ===========================
// HOPE TITLE GLOW EFFECT
// ===========================

const title =
document.querySelector(".hero h1");

if(title){

setInterval(() => {

title.style.textShadow =
"0 0 15px #e62429, 0 0 30px #e62429";

setTimeout(() => {

title.style.textShadow =
"none";

},1000);

},2500);

}

// ===========================
// HERO BUTTON HOVER EFFECT
// ===========================

const heroButton =
document.querySelector(".hero button");

if(heroButton){

heroButton.addEventListener("mouseenter", () => {

heroButton.style.transform =
"scale(1.08)";

heroButton.style.transition =
"0.3s";

});

heroButton.addEventListener("mouseleave", () => {

heroButton.style.transform =
"scale(1)";

});

}

// ===========================
// FADE-IN ANIMATION ON SCROLL
// ===========================

const sections =
document.querySelectorAll(
".about, .hero-info, .stats"
);

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";

}

});

});

sections.forEach(section => {

section.style.opacity = "0";

section.style.transform =
"translateY(50px)";

section.style.transition =
"all 1s ease";

observer.observe(section);

});

// ===========================
// LOGO CLICK → HOME
// ===========================

const logo =
document.querySelector(".logo");

if(logo){

logo.addEventListener("click", () => {

window.location.href =
"index.html";

});

}

// ===========================
// RANDOM SPIDER-MAN QUOTES
// ===========================

const quotes = [

"With great power comes great responsibility.",

"Anyone can wear the mask.",

"No matter how buried it gets, or lost you feel, you must promise me that you won't give up hope.",

"Being Spider-Man is a sacrifice."

];

const heroText =
document.querySelector(".hero p");

if(heroText){

setInterval(() => {

const randomQuote =

quotes[Math.floor(
Math.random() * quotes.length
)];

heroText.innerText =
randomQuote;

},5000);

}