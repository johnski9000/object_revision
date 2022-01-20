const workoutPlan = {
    _plans: {
      chest: [],
      back: [],
      shoulder: []
    },
    get chest() {
        return this._plans.chest;
      },
    set chest(chest) {
      this.plans.chest = chest;
    },
    get back() {
        if (this._plans.back.length < 1) {
          return "You need to workout puny bitch"
        } else {
          return this._plans.back;
        }
      },
    set back(back) {
      this._plans.back = back;
    },
    get shoulder() {
        return this._plans.shoulder;
      },
    set shoulder(shoulder) {
      this._plans.shoulder = shoulder;
    },
    get plans() {
      return {
      chest: this.chest,
      back: this.back,
      shoulder: this.shoulder
      };
      },
      addWorkoutToPlan(planName, exerciseName, exerciseSets) {
        const plan = {
          exercise: exerciseName,
          sets: exerciseSets
        }
        return this._plans[planName].push(plan)
      },
       getRandomPlanFromPlans (planName) {
        const plans = this._plans[planName];
        const randomIndex = Math.floor(Math.random() * plans.length);
        return plans[randomIndex]
      },
      generateRandomPlan() {
        const chestWorkout = this.getRandomPlanFromPlans('chest');
        const backWorkout = this.getRandomPlanFromPlans('back');
        const shoulderWorkout = this.getRandomPlanFromPlans('shoulder');
        const totalSets = chestWorkout.sets + backWorkout.sets 
                          + shoulderWorkout.sets
                          
        return `Your workout is ${chestWorkout.exercise}, ${backWorkout.exercise}, ${shoulderWorkout.exercise}, and the total sets is ${totalSets}`
      }
  };
  
  workoutPlan.addWorkoutToPlan("chest", "bench", 5)
  workoutPlan.addWorkoutToPlan("chest", "db press", 5)
  workoutPlan.addWorkoutToPlan("chest", "flyes", 5)
  
  workoutPlan.addWorkoutToPlan("back", "deadlift", 5)
  workoutPlan.addWorkoutToPlan("back", "rows", 5)
  workoutPlan.addWorkoutToPlan("back", "pullovers", 5)
  
  workoutPlan.addWorkoutToPlan("shoulder", "barbell overhead", 5)
  workoutPlan.addWorkoutToPlan("shoulder", "db overhead", 5)
  workoutPlan.addWorkoutToPlan("shoulder", "side raises", 5)
  
  console.log(workoutPlan.plans)
  const workout = workoutPlan.getRandomPlanFromPlans("back")
  console.log(workout)
  console.log(workoutPlan.generateRandomPlan())
  
  
  
  
  
  