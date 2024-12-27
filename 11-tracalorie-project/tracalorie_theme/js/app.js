class CalorieTracker {
    constructor() {
        this._calorieLimit = 2000,
        this._totalCalories = 0,
        this._meals = [],
        this._workouts = []
    }

    addMeals(meals) {
        this._meals.push(meals)
        this._totalCalories += meals.calories
    }

    addWorkout(workout) {
        this._workouts.push(workout)
        this._totalCalories -= workout.calories
    }

    updateStates() {
        
    }
}

class Meal {
    constructor(name, calories) {
        this.calories = calories
        this.name = name
        this.id = Math.random().toString(16).slice(2)
    }

}


class workout {
    constructor(name, calories) {
        this.calories = calories
        this.name = name
        this.id = Math.random().toString(16).slice(2)
    }
}