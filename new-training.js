const form = document.querySelector("#training-form");
const exerciseDate = document.querySelector("#exercise-date");
const trainingDay = document.querySelector("#training-day");
const exerciseName = document.querySelector("#exercise-name");
const exerciseSets = document.querySelector("#exercise-sets");
const exerciseReps = document.querySelector("#exercise-reps");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const exerciseDateValue = exerciseDate.value;
    const trainingDayValue = trainingDay.value;
    const exerciseNameValue = exerciseName.value;
    const exerciseSetsValue = exerciseSets.value;
    const exerciseRepsValue = exerciseReps.value;
    
    console.log(exerciseDateValue + trainingDayValue, exerciseNameValue, exerciseSetsValue, exerciseRepsValue);

});