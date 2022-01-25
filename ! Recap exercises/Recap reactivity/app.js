const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            logger: ''
        };
    },
    computed: {
        result() {
            if(this.counter < 37)
                return 'Not there yet!';
            else if (this.counter === 37)
                return 'Finally... 37!';
            else
                return 'Too much!';
        }
    },
    /* When the 'result' variable state changes, watcher is activated */
    watch: {
        result() {
            const that = this;
            setTimeout(() => that.counter = 0, 2000);
        }
    },
    methods: {
        add(n) {
            this.counter += n;
        }
    }
});

app.mount('#assignment');