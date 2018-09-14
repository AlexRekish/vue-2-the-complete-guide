new Vue({
  el: '#exercise',
  data: {
    effect: false,
    firstColor: 'green',
    secondColor: 'blue',
    thirdColor: 'yellow',
    green: 'false',
    width: '100px',
    height: '100px',
    progressBarWidth: 0,
  },
  methods: {
    startEffect() {
      setInterval(() => {
        this.effect = !this.effect;
      }, 1000);
    },
    startProgress() {
      setInterval(() => {
        this.progressBarWidth += 1;
      }, 50);
    },
  },
  computed: {
    firstStyles() {
      return {
        highlight: this.effect,
        shrink: !this.effect,
      };
    },
    secondStyles() {
      return {
        high: !this.effect,
      };
    },
    fourthStyles() {
      return {
        green: this.green === 'true',
        blue: this.green === 'false',
      };
    },
    sixthStyles() {
      return {
        width: this.progressBarWidth < 100 ? `${this.progressBarWidth * 3}px` : '300px',
        height: '50px',
        backgroundColor: 'lightgreen',
      };
    },
  },
});
