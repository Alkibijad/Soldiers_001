class StartGame {
  constructor() {
    this.alienAttacksCounter = 0;
    this.humanAttackesCounter = 0;
  }
  gameDisplay(attacker, defender) {
    let attackerHeader = enterGame.qs(`.attacker-annauncement-${attacker}`);
    let defenderHeader = enterGame.qs(`.attacker-annauncement-${defender}`);

    attackerHeader.innerHTML = `Attacker is ${attacker}'s Army`;
    defenderHeader.innerHTML = `${defender}'s Army prepare to defend `;
  }

  attacksCounter(attacker, defender) {
    let alienAttackCounter = enterGame.qs(`.attacks-counter-Alien`);
    let humanAttackCounter = enterGame.qs(`.attacks-counter-Human`);

    if (attacker === "Alien") {
      this.alienAttacksCounter++;
      alienAttackCounter.innerHTML = `${attacker} Army attack #${this.alienAttacksCounter}`;
      humanAttackCounter.innerHTML = `${defender}'s Army attack #${this.humanAttackesCounter}`;
    } else if (attacker === "Human") {
      this.humanAttackesCounter++;
      alienAttackCounter.innerHTML = `${defender} Army attack #${this.alienAttacksCounter}`;
      humanAttackCounter.innerHTML = `${attacker}'s Army attack #${this.humanAttackesCounter}`;
    }

    setInterval(() => enterGame.getAttacker, 1000);
  }
}

let startGame = new StartGame();
