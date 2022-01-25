const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullName: ''
    };
  },
  /* Similar to observable design pattern 
   [+] Useful for backend logic */
  watch: {
    /* Whenever counter changes, counter() watcher is rerenderred */
    counter(value) {
      if(value > 50) {
        const that = this;
        setTimeout(() => that.counter = 0, 2000);
      }
    }
  },

  /* Methods executed differently from methods:
    [*] Make independent properties without random dependencies
    [+] Improves performance */
  computed: {
    fullName() {
      if(this.name === '' || this.lastName === '') {
        return 'Please use a valid name above...';
      }
      return 'Your name: ' + this.name + ' ' + this.lastName;
    } 
  },

  /* Event-data binding */
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
      this.lastName = '';
    },
    fullName() {
      if(this.name === '') {
        return 'Please use a valid name above...';
      }
      return 'Your name: ' + this.name + ' Sornosa';
    } 
  }
});

app.mount('#events');
