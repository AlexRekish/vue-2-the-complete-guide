new Vue({
  el: '#app',
  data: {
    started: false,
    playerStartHP: 200,
    monsterStartHP: 200,
    playerCurrentHP: 200,
    monsterCurrentHP: 200,
    turns: [],
  },
  computed: {
    getPlayerHP() {
      return {
        width: `${Math.floor((this.playerCurrentHP / this.playerStartHP) * 100)}%`,
      };
    },
    getMonsterHP() {
      return {
        width: `${Math.floor((this.monsterCurrentHP / this.monsterStartHP) * 100)}%`,
      };
    },
  },
  methods: {
    startGame() {
      this.started = true;
      this.playerCurrentHP = this.playerStartHP;
      this.monsterCurrentHP = this.monsterStartHP;
      this.turns = [];
    },
    getAttackValue(min, max) {
      min -= 0.5;
      max += 0.5;
      return Math.round(Math.random() * (max - min) + min);
    },
    checkPlayerHP() {
      if (this.playerCurrentHP <= 0) {
        alert('You lose :(');
        this.started = false;
      }
    },
    checkMonsterHP() {
      if (this.monsterCurrentHP <= 0) {
        alert('You won!');
        this.started = false;
        return;
      }
    },
    monsterAttack() {
      const damage = this.getAttackValue(5, 12);
      this.playerCurrentHP -= damage;
      this.checkPlayerHP();
      this.turns.unshift({
        text: `Monster hit Player for ${damage}`,
        isPlayer: false,
      });
    },
    attack() {
      const damage = this.getAttackValue(3, 10);
      this.monsterCurrentHP -= damage;
      this.checkMonsterHP();
      this.turns.unshift({
        text: `Player hit Monster for ${damage}`,
        isPlayer: true,
      });
      this.monsterAttack();
    },
    specialAttack() {
      const damage = this.getAttackValue(5, 20);
      this.monsterCurrentHP -= damage;
      this.checkMonsterHP();
      this.turns.unshift({
        text: `Player hard hit Monster for ${damage}`,
        isPlayer: true,
      });
      this.monsterAttack();
    },
    heal() {
      const healed = this.getAttackValue(5, 15);
      this.playerCurrentHP += healed;
      if (this.playerCurrentHP > 200) this.playerCurrentHP = 200;
      this.turns.unshift({
        text: `Player heal for ${healed}`,
        isPlayer: true,
      });
      this.monsterAttack();
    },
    giveUp() {
      this.started = false;
    },
  },
});
