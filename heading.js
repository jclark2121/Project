const myHeading = document.getElementById("change");
const colors = ["red", "green", "blue", "#ffd801", "orange", "purple", "aqua", "pink", "dodgerblue", "lightcoral", "limegreen", "indigo", "crimsom", "violet", "steelblue"]
myHeading.addEventListener("mouseover", function () {
    const randomIndex = Math.floor(Math.random()*colors.length);
    myHeading.style.color = colors[randomIndex];
});
myHeading.addEventListener("mouseout", function () {
  myHeading.style.color = ""; // reset to default
});