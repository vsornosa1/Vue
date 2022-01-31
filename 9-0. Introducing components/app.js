const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel', 
                    name: 'Manuel Lorenz', 
                    phone: '01234 5678 991', 
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie', 
                    name: 'Julie Jones', 
                    phone: '09876 543 221', 
                    email: 'julie@localhost.com'
                },
            ]
        };
    }
});

// arg1: ID which will be the HTML tag name (cleanCode tip: use multi-word tags)
// arg2: Object with the component atomic info (mini app like)
app.component('friend-contact', {
    /* HTML specific to the component */
    template: 
    `
        <li>
          <h2> {{ friend.name }} </h2>
          <button @click="toggleDetails"> {{ areDetailsVisible ? 'Hide' : 'Show' }} details </button>
          <ul v-if="areDetailsVisible">
            <li><strong> Phone: </strong> {{ friend.phone }} </li>
            <li><strong> Email: </strong> {{ friend.email }} </li>
          </ul>
        </li>
    `,
    data() {
        return {
            areDetailsVisible: false,
            friend: {
                id: 'manuel', 
                name: 'Manuel Lorenz', 
                phone: '01234 5678 991', 
                email: 'manuel@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.areDetailsVisible = !this.areDetailsVisible;
        }
    }
});

app.mount('#app');

/* Next step: Use the same component with different data! */