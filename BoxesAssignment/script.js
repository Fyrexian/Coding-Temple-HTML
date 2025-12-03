const createBoxButton = document.getElementById("createBox");
const removeBoxesButton = document.getElementById("removeBoxes");
const boxContainer = document.getElementById("boxContainer");

// Generate random color
function getRandomColor() {
  const colors = ["#e74c3c", "#2ecc71", "#f1c40f", "#8e44ad", "#3498db"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Create a box
function createBox() {
  const box = document.createElement("div"); // Create a new div
  box.classList.add("box"); // Add the 'box' class for styling
  box.style.backgroundColor = getRandomColor(); // Apply a random color
  box.innerText = document.querySelectorAll(".box").length + 1; // Display box number

  boxContainer.appendChild(box); // Append the new box inside the container
}

// Remove all boxes
function removeAllBoxes() {
  boxContainer.innerHTML = ""; // Clears the container's inner content
}

// Event listeners
createBoxButton.addEventListener("click", createBox);
removeBoxesButton.addEventListener("click", removeAllBoxes);
