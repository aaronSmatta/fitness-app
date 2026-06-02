class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
    this.challenges = [];
  }
  joinChallenge(challengeName) {
    this.challenges.push(challengeName);
    this.points += 10;
    return this.name + ' joined "' + challengeName + '" (+10 pts)';
  }
  logWorkout(workoutName) {
    this.points += 5;
    return this.name + ' logged: ' + workoutName + ' (+5 pts)';
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

// --- Test it out ---
const alex = new User("Alex", "alex@email.com");
const jordan = new User("Jordan", "jordan@email.com");

console.log(alex.joinChallenge("30-day squat challenge"));
console.log(alex.logWorkout("Morning run"));
console.log(alex.logWorkout("Push-ups"));
console.log(jordan.joinChallenge("30-day squat challenge"));

console.log("\n--- Alex's profile ---");
console.log(JSON.stringify(alex.getProfile(), null, 2));
