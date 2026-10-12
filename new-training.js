const form = document.querySelector("#training-form");
const exerciseDate = document.querySelector("#exercise-date");
const exerciseDateValue = exerciseDate.value;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(exerciseDateValue);

});