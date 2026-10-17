fetch("./data/mock-exercise-session.json")

.then(response => {
     return response.json();
})

.then(workoutDay => {
     // Today's Session
     document.querySelector('.js-day').textContent = workoutDay.session_name;



     // Exercise Section
     let phaseCardHtml = "";
     for(let i = 0; i < workoutDay.phases.length; i++) {
          // console.log(workoutDay.phases[i].phase_name);
          phaseCardHtml += renderPhaseCard(workoutDay.phases[i]);
     }
     document.querySelector('.exercise-container').innerHTML = phaseCardHtml;
});

function renderPhaseCard(phase) {
     let exerciseCardHtml = ""
     for(let i = 0; i < phase.exercises.length; i++) {
          const currentExercise = phase.exercises[i];

          exerciseCardHtml += renderExerciseCard(currentExercise)
     }
     
     // NOTE: Keeping an open attribute in details allows the dropdown to stay down until it is pressed
     return `  <details class="exercise-phase" open>
                    <summary class="phase-header js-phase">
                         ${phase.phase_name}
                    </summary>

                    <div class="phase-exercises">
                         ${exerciseCardHtml}
                    </div>
               </details>`
}

function renderExerciseCard(exercise) {

     // Instructions
     let instructionsHTML = "";
     if (exercise.instructions && exercise.instructions.length > 0) {
          for (let i = 0; i < exercise.instructions.length; i++) {
               instructionsHTML += `<li class="js-instructions-list-item">${exercise.instructions[i]}</li>`;
          }
     }

     // Tips
     let tipsHTML = "";
     if (exercise.tips && exercise.tips.length > 0) {
          for(let i = 0; i < exercise.tips.length; i++) {
               tipsHTML += `<li class="js-tips-list-item">${exercise.tips[i]}</li>`
          }
     }
     

     return `  <article class="exercise-card">
                    <div class="exercise-top">
                         <h3 class="js-exercise-title">
                              ${exercise.name}
                         </h3>

                         <p class="js-exercise-sets-reps">
                              ${exercise.target}
                         </p>
                    </div>

                    <div class="exercise-middle">
                         <div class="middle-left">
                              <button class="timer">
                                   Timer
                              </button>

                              <button class="demo">
                                   Press For Demo
                              </button>

                              <button class="swap">
                                   Swap
                              </button>
                         </div>

                         <span class="exercise-check-status">
                              Check
                         </span>
                    </div>

                    <div class="exercise-bottom">
                         <details class="instructions-container" open>
                              <summary class="instructions">
                                   Instructions
                              </summary>

                              <ol class="instructions-list">
                                   ${instructionsHTML}
                              </ol>
                         </details>

                         <details class="tips-container" open>
                              <summary class="summary-tips">
                                   Tips
                              </summary>

                              <ul class="tips-list">
                                   ${tipsHTML}
                              </ul>
                         </details>
                    </div>
               </article>
`
}