fetch("../data/mock-exercise-session.json")

.then(response => {
     return response.json();
})

.then(workoutDay => {
     document.querySelector('.js-day').textContent = workoutDay.session_name;
});