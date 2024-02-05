const button = document.getElementById("menu-button");
const items = document.getElementById("menu-items");
console.log(button);

button.addEventListener("click", () => {
  items.classList.toggle("showMenu");
  button.classList.toggle("showButton");
  console.log(items.classList);
});
