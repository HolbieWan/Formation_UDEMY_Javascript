let a = document.querySelector("a");
let button = document.querySelector("button");

a.addEventListener("click", (e) => {
  if (confirm("Etes-vous sûr ?")) {
    location.href = "https://believemy.com";
  }
});

button.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "orange";
});

function backgroundWhite() {
  document.body.style.backgroundColor = "white";
}

button.addEventListener("mouseover", (e) => {
  button.style.color = "red";
});

button.addEventListener("mouseout", (e) => {
  button.style.color = "Blue";
});

button.addEventListener("mouseout", backgroundWhite);
button.addEventListener("mouseout", () => {
  document.body.style.fontFamily = "arial";
});

// button.removeEventListener("mouseout", backgroundWhite);
