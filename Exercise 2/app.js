new Vue({
  el: '#exercise',
  data: {
    value: '',
  },
  methods: {
    showAlert() {
      alert('clicked!');
    },
    storeValue(evt) {
      this.value = evt.target.value;
    },
  },
});
