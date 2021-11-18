const app = Vue.createApp({ // Object used to configure Vue app
    // Data function returns an object with data available in the vue-controlled html code + methods
    data() {
        return {
            // Key-value pairs of my choice
            courseGoalA: 'Become a Vue expert!',
            courseGoalB: 'Master Vue and build amazing apps',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) return this.courseGoalB
            else return 'Learning to do random binding with Vue!'
        }
    }
});

// Selection of the html block we want to mount (+ child elements)
app.mount('#user-goal');