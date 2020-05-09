console.log("api.js - you made it.");
const API = {
  async getLastWorkout() {
    let res;
    try {
      console.log("fail: /api/workouts");
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },

  async addExercise(data) {
    const id = location.search.split("=")[1];
    console.log(data);
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },

  async createWorkout(data = {}) {
    console.log("fail: POST /api/workouts");
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    console.log("fail: /api/workouts/range");
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};