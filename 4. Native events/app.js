const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
    outputFullName() {
      if(this.name === '') {
        return 'Please use a valid name above...';
      }
      return 'Your name: ' + this.name + ' Sornosa';
    } 
  }
});

app.mount('#events');
