const bike = document.getElementById("bike");
const passwordForm = document.getElementById("passwordForm");
const cancelButton = document.getElementById("cancelButton");
let x = 0;
let y = 0;
const minSpeed = 2;
const maxSpeed = 3;

let speedX = minSpeed * (Math.random() < 0.5 ? 1 : -1);
let speedY = minSpeed * (Math.random() < 0.5 ? 1 : -1);

let isFast = false;
let isAnimating = true;


