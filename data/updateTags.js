const fs = require('fs');

// Load the database
const db = JSON.parse(fs.readFileSync('free.en.json', 'utf8'));

db.exercises = db.exercises.map(exercise => {
  const tags = exercise.tags || [];
  const equipment = exercise.equipment || "";
  const force = exercise.force_type || "";
  const mechanic = exercise.mechanic || "";

  // Logic rules for safety tags
  const isBarbellPushOrSquat = equipment === "barbell" && (force === "push" || exercise.variation_group === "squat" || exercise.variation_group === "bench-press");

  exercise.safety_tags = {
    solo_safe: !isBarbellPushOrSquat,
    joint_friendly: tags.includes("rehab") || tags.includes("mobility") || equipment === "air_bike" || equipment === "resistance_band",
    knee_safe: tags.includes("knee_safe") || (exercise.body_part !== "upper_legs" && exercise.body_part !== "lower_legs"),
    lower_back_safe: tags.includes("lower_back_safe") || force === "pull" || exercise.is_bodyweight === true,
    shoulder_safe: tags.includes("shoulder_safe") || (exercise.body_part !== "shoulders" && exercise.body_part !== "chest"),
    no_axial_load: tags.includes("no_axial_load") || mechanic === "isolation"
  };

  // Ensure explicit overrides from existing tags are fully respected
  if (tags.includes("knee_safe")) exercise.safety_tags.knee_safe = true;
  if (tags.includes("lower_back_safe")) exercise.safety_tags.lower_back_safe = true;
  if (tags.includes("shoulder_safe")) exercise.safety_tags.shoulder_safe = true;
  if (tags.includes("no_axial_load")) exercise.safety_tags.no_axial_load = true;

  return exercise;
});

fs.writeFileSync('free.en_updated.json', JSON.stringify(db, null, 2));
console.log("Successfully enriched all exercises with safety_tags.");