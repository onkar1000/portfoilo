// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Typing Effect
const text = ["Frontend Developer", "Full Stack Developer", "Software Engineer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];
  
  if (!isDeleting) {
    document.getElementById("typing").innerHTML = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").innerHTML = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Scroll Progress
window.addEventListener("scroll", () => {
  let scroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progress-bar").style.width = (scroll / height) * 100 + "%";
});

// Back to top
const btn = document.getElementById("topBtn");

window.onscroll = function () {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Theme Toggle
const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light"));
};

// Load theme
if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("light");
}
