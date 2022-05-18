class EnterGame {
  constructor() {
    this.landingPageView = this.qs(".landing-page");
    this.attackView = this.qs(".whoIsAttacking-view");
    this.attackerH2 = this.qs(".whoIsAttacking-view h2");
    this.game = this.qs(".game-container");
    this.attacker = null;
    this.defender = null;
  }
  qs(val) {
    return document.querySelector(val);
  }
  getAttacker() {
    let rand = Math.floor(Math.random() * 2);
    if (rand == 0) {
      // prikazi ko napada
      this.attacker = "Human";
      this.defender = "Alien";
      this.whoIsAttacking(this.attacker);
      // human attack
      // pozovi armiju koja napada
    } else if (rand == 1) {
      //prikazi ko napada
      this.attacker = "Alien";
      this.defender = "Human";
      this.whoIsAttacking(this.attacker);

      //pozovi armiju koja napada
      //alien attack
    }
  }
  whoIsAttacking() {
    this.landingPageView.style.display = "none";
    this.attackView.style.display = "block";
    this.attackerH2.innerHTML = `<p>First army to attack is ${this.attacker} Army</p>
                                      <p class="countdown">GetReady</p>`;
    this.countdown();
  }
  countdown() {
    setTimeout(() => {
      let countdown = this.qs(".countdown");
      let counter = 1;
      let loop = setInterval(() => {
        countdown.innerHTML = counter;
        if (counter < 0) {
          clearInterval(loop);
          this.attackView.style.display = "none";
          this.game.style.display = "flex";
          startGame.gameDisplay(this.attacker, this.defender);
          startGame.attacksCounter(this.attacker, this.defender);
        }
        counter--;
      }, 1000);
    }, 1000);
  }
}

let enterGame = new EnterGame();
