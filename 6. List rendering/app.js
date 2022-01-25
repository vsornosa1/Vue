const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoal: ''
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoal != '') {
        this.goals.push(this.enteredGoal);
        this.enteredGoal = '';
      }
    },
    removeGoal(i) {
      this.goals.splice(i, 1); // Remove element with index = 1
    }
  }
});

app.mount('#user-goals');
