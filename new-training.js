const form = document.querySelector("#training-form");
const exerciseDate = document.querySelector("#exercise-date");


form.addEventListener("submit", function(event) {
    event.preventDefault();
    const exerciseDateValue = exerciseDate.value;
    console.log(exerciseDateValue);

});