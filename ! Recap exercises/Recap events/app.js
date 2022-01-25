const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedInput: ''
        }
    },
    methods: {
        showAlert() {
            alert('Exercise 1 complete');
        },
        copyInput() {
            this.userInput = event.target.value;
        },
        confirmInput() {
            this.confirmedInput = this.userInput;
        }
    }
});

app.mount('#assignment');