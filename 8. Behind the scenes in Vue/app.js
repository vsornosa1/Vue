const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  /* Vue lifecycle hooks */
  beforeCreate() {
    console.log('beforeCreate() hook');
  },
  created() {
    console.log('created() hook');
  },
  beforeMount() {
    console.log('beforeMount() hook');
  },
  mounted() {
    console.log('mounted() hook');
  },
  beforeUpdate() {
    console.log('beforeUpdate() hook');
  },
  updated() {
    console.log('updated() hook');
  },
  beforeUnmount() {
    console.log('beforeUnmount() hook');
  },
  unmounted() {
    console.log('unmounted() hook');
  }
});

app.mount('#app');

setTimeout(() => app.unmount(), 5000);