let colorInput = document.getElementById("colorInput");
let changeColorBtn = document.getElementById("changeColorBtn");

changeColorBtn.addEventListener("click", function() {
  let color = colorInput.value.toLowerCase();
  let validColors = ["red", "blue", "green", "black", "white"];

  if (validColors.includes(color)) {
    document.body.style.backgroundColor = color;
  } else {
    alert("Wrong color!");
  }

  colorInput.value = "";
});
