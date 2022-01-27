const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            pokemonHealth: 100,
            currentTurn: 0,
            spAttTurn: 0,
            winner: null,
            logMessages: []
        };
    },
    watch: {
        playerHealth(player) { 
            if(player <= 0 && this.pokemonHealth <= 0) { // Draw
                this.winner = 'draw';
            } else if (player <= 0) { // Player lost
                this.winner = 'pokemon';
            }
        },
        pokemonHealth(pokemon) {
            if(pokemon <= 0 && this.playerHealth <= 0) { // Draw
                this.winner = 'draw';
            } else if (pokemon <= 0) { // Pokemon lost
                this.winner = 'player';
            }
        }
    },
    computed: {
        pokemonBarStyles() {
            if (this.pokemonHealth < 0) {
                this.pokemonHealth = 0;
                return { width: '0%' };
            }
            return { width: this.pokemonHealth + '%' };
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' };
        },
        specialAttackAllowed() {
            if (this.currentTurn === 0) return true;
            if(this.spAttTurn !== 0 && this.currentTurn - this.spAttTurn < 3)
                return (this.currentTurn - this.spAttTurn) % 3 !== 0;
        },
        resetMsg() {
            if(this.winner == null) 
                return 'Reset values'
            else 
                return 'Play again';
        }
    },
    methods: {
        attackPokemon() {
            this.currentTurn++;
            const attackDamage = getRandomBetween(5, 12);
            this.pokemonHealth -= attackDamage;
            this.addLogMessage('player', 'attack', attackDamage);
            setTimeout(() => this.attackPlayer(), 500);
        },
        specialAttackPokemon() {
            this.spAttTurn = this.currentTurn;
            this.currentTurn++;
            const specialAttackDamage = getRandomBetween(10, 25);
            this.pokemonHealth -= specialAttackDamage;
            this.addLogMessage('player', 'spAttack', specialAttackDamage);
            setTimeout(() => this.attackPlayer(), 500);
        },
        attackPlayer() {
            const attackDamage = getRandomBetween(8, 15);
            this.playerHealth -= attackDamage;
            this.addLogMessage('pokemon', 'attack', attackDamage);
        },
        healPlayer() {
            this.currentTurn++;
            const healValue = getRandomBetween(8, 20);
            this.playerHealth + healValue > 100 ?
                this.playerHealth = 100
                : this.playerHealth += healValue;
            this.addLogMessage('player', 'heal', healValue);
            setTimeout(() => this.attackPlayer(), 500);
        },
        surrender() {
            this.winner = 'pokemon';
        },
        restoreAllValues() {
            this.playerHealth = 100;
            this.pokemonHealth = 100;
            this.winner = null;
            this.currentTurn = 0;
            this.spAttTurn = 0;
            this.logMessages = [];
        },
        addLogMessage(who, action, value) {
            this.logMessages.unshift({ // .push but at the start of the array
                actionBy: who,
                actionType: action,
                actionValue: value
            }); 
            
        }
    }
});

app.mount('#game');

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}