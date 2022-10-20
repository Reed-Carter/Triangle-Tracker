// Business Logic




//User Interface Logic

function determineTriangle(event) {
  event.preventDefault();
  const side1 = parseInt(document.querySelector("input#input1")).value
  const side2 = parseInt(document.querySelector("input#input2")).value
  const side3 = parseInt(document.querySelector("input#input3")).value

  let result;
  if (side1 === side2 && side2 === side3) {
    result = "equilateral";
  }
  else if (side1 === side2 || side1 === side3 || side2 === side3) {
    result = "isosceles"
  }
  
  

  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("triangleTracker");
  form.addEventListener("submit", determineTriangle);
})
  