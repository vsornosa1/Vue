<template>
    <li>
        <h2> {{ name }} {{ isFavourite ? '*' : '' }} </h2>
        <button @click="toggleFavourite"> {{ isFavourite ? 'Remove' : 'Asign as' }}  favourite </button>
        <button @click="toggleDetails"> {{ areDetailsVisible ? 'Hide' : 'Show' }} </button>
        <ul v-if="areDetailsVisible">
            <li>
                <strong> Phone: </strong> 
                {{ phoneNumber }} 
            </li>
            <li>
                <strong> Email: </strong> 
                {{ emailAddress }} 
            </li>
        </ul>
        <button @click="deleteFriend"> Delete </button>
    </li>
</template>

<script>    
    export default {
        props: { 
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true,
            },
            phoneNumber: {
                type: String,
                required: true,
            },
            emailAddress: {
                type: String,
                required: true,
            },
            isFavourite: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        emits: {
            // Shows other devs that toggle-favourite is an event that can be emmited with an id argument
            'toggle-favourite': function(id) {
                if(id) {
                    return true;
                } else {
                    console.warn('Id is missing!');
                    return false;
                }
            },
            'delete': function(id) {
                if(id) {
                    return true;
                } else {
                    console.warn('Id is missing!');
                    return false;
                }
            }
        },
        data() {
            return {
                areDetailsVisible: false
            };
        },
        methods: {
            toggleDetails() {
                this.areDetailsVisible = !this.areDetailsVisible;
            },
            toggleFavourite() {
                this.$emit('toggle-favourite', this.id); // Emitting custom events (Child -> Parent) with custom data (id)
            },
            deleteFriend() {
                this.$emit('delete', this.id);
            }
        }
    };
</script>
