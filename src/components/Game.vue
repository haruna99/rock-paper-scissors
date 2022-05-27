<template>
    <div class="game">
        <div class="game-background">
            <img src="../assets/img/bg-triangle.svg" alt="">
        </div>
        <div >
            <GameBtn :func="playGame.bind(this,'paper')"  class="game-paper" image="icon-paper.svg"/>
            <GameBtn :func="playGame.bind(this, 'scissors')" class="game-scissors" image="icon-scissors.svg"/>
            <GameBtn :func="playGame.bind(this, 'rock')" class="game-rock" image="icon-rock.svg"/>
        </div>
    </div>
</template>

<script>
import GameBtn from '@/components/GameBtn.vue'
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['win'])
    },
    data() {
        return {
            computerChoice: null
        }
    },
    components: {
        GameBtn
    },
    methods: {
        playGame(val) {
            this.$store.commit('SET_GAME_STATE', false)
            this.$store.commit('SET_CHOICE', val)
            let choices = ['rock', 'paper', 'scissors']
            choices = choices.filter(choice => choice != val)
            const random = Math.floor(Math.random() * 2);
            this.computerChoice = choices[random];
            this.$store.commit("SET_COMPUTER_CHOICE", this.computerChoice)

            if (val == 'rock') {
                this.computerChoice == 'paper' ? this.$store.commit("SET_RESULT", false) : this.$store.commit("SET_RESULT", true)
            }
            if (val == 'paper') {
                this.computerChoice == 'rock' ? this.$store.commit("SET_RESULT", true) : this.$store.commit("SET_RESULT", false)
            }
            if (val == 'scissors') {
                this.computerChoice == 'rock' ? this.$store.commit("SET_RESULT", false) : this.$store.commit("SET_RESULT", true)
            }
            if (this.win) {
                this.$store.commit('SET_SCORE', 1)
            }

        }
    }
}
</script>

<style lang="scss">
    .game {
        position: relative;
        &-background {
            img {
                position: absolute;
                top: 14rem;
                left: 50%;
                transform: translate(-50%);
                width: 22rem;
                margin-top: 5rem;
            }
        }

        &-paper {
            border: 1.5rem solid hsl(230, 89%, 62%);
            position: absolute;
            top: 14rem;
            left: calc(50% - 9rem);
            transform: translate(-50%);
        }

        &-scissors {
            border: 1.5rem solid hsl(39, 89%, 49%);
            position: absolute;
            top: 14rem;
            right: calc(50% - 9rem);
            transform: translate(50%);
        }

        &-rock {
            border: 1.5rem solid hsl(349, 71%, 52%);
            position: absolute;
            top: 30rem;
            left: calc(50%);
            transform: translate(-50%);
        }
        
    }
</style>