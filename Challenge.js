class Challenge {

  constructor(name, createdBy) {
    this.name = name;
    this.createdBy = createdBy;   // a User object
    this.participants = [];
    this.startDate = new Date();
    this.active = true;

    // creator auto-joins their own challenge
    this.addParticipant(createdBy);
  }

  addParticipant(user) {
    const alreadyIn = this.participants.find(p => p.email === user.email);
    if (alreadyIn) return `${user.name} is already in this challenge`;

    this.participants.push(user);
    user.joinChallenge(this.name);   // update the User too
    return `${user.name} joined "${this.name}"`;
  }

  getLeaderboard() {
    return [...this.participants]
      .sort((a, b) => b.points - a.points)
      .map((u, i) => `${i + 1}. ${u.name} — ${u.points} pts`);
  }

  end() {
    this.active = false;
    const winner = this.getLeaderboard()[0];
    return `Challenge ended! Winner: ${winner}`;
  }

}