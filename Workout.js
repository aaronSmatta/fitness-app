class Workout {

  constructor(type, durationMinutes) {
    this.type = type;
    this.durationMinutes = durationMinutes;
    this.date = new Date();     // auto-set to right now
    this.points = this.calcPoints();
  }

  calcPoints() {
    // 1 point per minute, bonus for longer sessions
    if (this.durationMinutes >= 60) return this.durationMinutes + 15;
    if (this.durationMinutes >= 30) return this.durationMinutes + 5;
    return this.durationMinutes;
  }

  getSummary() {
    return `${this.type} · ${this.durationMinutes} min · ${this.points} pts`;
  }

}