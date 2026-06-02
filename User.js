class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
    this.challenges = [];
    this.workouts = [];
  }
  joinChallenge(challengeName) {
    this.challenges.push(challengeName);
    this.points += 10;
    return this.name + ' joined "' + challengeName + '" (+10 pts)';
  }
  logWorkout(type, durationMinutes) {
    const workout = new Workout(type, durationMinutes);
    this.workouts.push(workout);
    this.points += workout.points;
    return this.name + ' logged: ' + workout.getSummary();
  }
  getProfile() {
    return {
      name: this.name,
      email: this.email,
      points: this.points,
      challenges: this.challenges
    };
  }
}