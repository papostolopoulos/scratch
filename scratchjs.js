window.onload = function () {
  console.log("In the js file");

  var firstNameInput = document.getElementById("firstName");
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event, target) {
    event.preventDefault();
    console.log(firstNameInput.value);
    if (firstNameInput.value.length < 2) {
      console.log("You need more letters");
    }
  });



};
