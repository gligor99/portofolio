const text = "Welcome to my digital realm...";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.querySelector("#dynamic-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  } else {
    document.querySelector("#dynamic-text").style.borderRight = "none";
  }
}

setTimeout(typeEffect, 500);
