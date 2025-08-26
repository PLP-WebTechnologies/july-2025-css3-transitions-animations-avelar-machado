/* ===========================
   📚 Part 2: Functions
   =========================== */

// Global scope variable
let animationCount = 0;

// Function with parameter + return value
function calculateArea(width, height) {
  return width * height;
}

// Function showing local vs global scope
function incrementAnimationCount() {
  let localMessage = "Animation triggered!";
  animationCount++;
  console.log(localMessage, "Total:", animationCount);
}

// Reusable function to toggle a CSS class
function toggleClass(element, className) {
  element.classList.toggle(className);
  incrementAnimationCount();
}

/* ===========================
   🎨 Part 3: CSS + JS Combo
   =========================== */

const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

animateBtn.addEventListener("click", () => {
  toggleClass(jsBox, "active");
  console.log("Box area is:", calculateArea(jsBox.offsetWidth, jsBox.offsetHeight));
});

// Modal Example
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
