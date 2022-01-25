const app = Vue.createApp({
  data() {
    return {
      counter: 3,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(n) {
      this.counter += n;
    },
    deduct(n) {
      this.counter -= n;
    },
    reset() { // Only triggers with right click
      this.counter = 0;
    },
    setName(nativeEvent) {
      this.name = nativeEvent.target.value;
    },
    submitForm(nativeEvent) {
      //nativeEvent.preventDefault(); // Prevents page refresh
      alert('Submitted');
    },
    confirmName() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
