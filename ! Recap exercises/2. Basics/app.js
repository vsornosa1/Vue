const app = Vue.createApp({
    data() {
        return {
            name: 'Sento Sornosa',
            age: 19,
            vueLogo: 'https://www.kindpng.com/picc/m/452-4529223_vue-js-logo-png-transparent-png.png',
            inputText: ''
        }
    },
    methods: {
        ageInFiveYears() {
            return this.age + 5;
        },
        randomNumber() {
            const random = Math.random();
            if (random < 0.5) return 0;
            else return 1;
        }
    }
});

app.mount('#assignment');