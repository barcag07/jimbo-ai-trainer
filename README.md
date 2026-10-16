# Jimbo: The AI GymBro

> Jimbo is an AI personal trainer that will give you detailed, flexible workouts and exercises based on your needs and goals.


* [App Live Preview](https://barcag07.github.io/jimbo-ai-trainer/app.html)
* [Landing Page Live Preview](https://barcag07.github.io/jimbo-ai-trainer/)
---

## Problem and Solution
The biggest problem with workout apps, including ones that incorporate ai, is that they do not account for missed sessions, injuries, handicaps, or lack of equipment. Jimbo will give you personalized exercises that take into account what type of training regimen you want, the gym equipment that is accessible to you, or what injuries you have that are limiting your progress.

Jimbo will have a section where you can update him on how you are feeling that day, and if you missed the previous session. This will automatically update your workout for the day and give you a new set of exercises based on your input.

Say you train legs the previous day and are starting to feel some pain in your knee, specifically tendonitis. The user will be able to tell Jimbo, and for the new day's workout he would recommend only upper body exercises that don't involve usage of the knee, AND he will add stretching exercise that would target the pain in the knee. Future workouts will keep record of the pain in the knee and take it into account for future workouts until the pain is gone.

---

## Core Features

* **Customizable Profile:** Tracks stats like height, weight, diet, and training style along with details like past injuries (ACL tears, bad shoulders) and physical limitations so workouts stay safe.
* **Flexible Training Types:** Supports different training philosophies, such as Powerlifting, Calisthenics, Sport-Specific conditioning (like soccer, football, track, etc.), High-Intensity Training, etc.
* **Daily Check-In & Skip Check:** A daily check-in before each session to log soreness or missed workouts. If the user skipped previous workouts throughout the week, Jimbo will automatically update the day's session to incorporate what they missed.
* **Gym and Bodyweight Options:** Generates exercises for gym-equipment and equipment-free routines for each scheduled session.
* **Guided Workout Sessions:** Every session includes a warmup, estimated completion time, set/rep targets, and checkboxes to mark exercises as complete. The user will also be able to input any exercises they did that were not listed along with if they skipped an exercise, why, and how they felt after the session.
* **Exercise Demo Pairing:** Pairs clear visual demonstration images with each exercise making it easy for the user to follow along and keep good form.
* **Visual Workout Calendar:** A weekly and monthly calendar to track completed sessions, review past logs, and track goals.

---

### Future Features

* **Workout Screenshot Import:** Snap a screenshot of an exercise from another fitness app to let Jimbo read the text, log it for you, and make a new session based on activity.
* **Health App Integration:** Syncing other health apps like Apple Health or other fitness trackers to record live metrics.
* **Meal Planning:** Personalized meal guidance to recommend what meals to prepare, portions, macro breakdowns, and supplement suggestions to match your training type and goals.
* **Push Notifications:** Smart notifications to keep you on schedule and keep lifters consistent.

---

## Tech Stack

* **Markup:** HTML5 (`<details>`, `<summary>`, `<article>`)
* **Styling:** CSS (Mobile-First Simulation, FlexBox)
* **Program Logic:** JavaScript, Fetch API, DOM Manipulation
* **Data Layer:** Mock JSON file simulating an AI generated workout session

---

## How the Engine Handles Session Rendering
### Current
**Workout Data:** Fetch local workout details from mock JSON file using Fetch API.
**Render HTML:** Functions loop through the workout data and create cards for each phase and exercise.
**Error Checks:** Checks if instructions or tips are present before displaying them, preventing a crash.


### Planned AI Features
**Daily Check-In:** AI collects your soreness level, energy level, injuries, and current equipment to offer custom daily session adjustments.
**AI Workout Outputs:** AI will look at your equipment, goals, and accommodations to generate a 4 week training block.
**AI Conversing:** Lets users chat directly with the AI about feedback, preferences, or real time routine tweaks to keep sessions flexible.

---

## Security & Privacy Considerations
**Current Prototype:** Runs locally in the browser with no user tracking or external database connections

**Future Storage:** User profile details, health notes, and injuries will require secure backend storage and encrypted user authentication.

<!-- Isaiah 55:8-9 -->