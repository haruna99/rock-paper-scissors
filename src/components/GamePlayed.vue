<template>
    <div class="game-played">
        <div class="game-played--main">
            <div class="your-pick">
                <p class="pick">you picked</p>
                <GameBtn :func="doNothing" :class="`game-played-${choice}`" :image="`icon-${choice}.svg`"/>
                <p class="pick-mb">you picked</p>
            </div>
            <div class="result">
                <p>{{ win ? "you win" : "you lose" }}</p>
                <button @click="restartGame" class="play-again" :class="{'blue': win, 'red': !win}">play again</button>
            </div>
            <div class="computer-pick">
                <p class="pick">the house picked</p>
                <GameBtn :func="doNothing" :class="`game-played-${computerChoice}`" :image="`icon-${computerChoice}.svg`"/>
                <p class="pick-mb">the house picked</p>
            </div>
        </div>
    </div>
</template>

<script>
import GameBtn from '@/components/GameBtn.vue'
import { mapGetters } from 'vuex'

export default {
    
    computed: {
        ...mapGetters(["choice", "win","computerChoice"])
    },
    methods: {
        doNothing() {
            return
        },
        restartGame() {
            this.$store.commit("SET_GAME_STATE", true)
        }
    },
    components: {
        GameBtn
    }
}
</script>

<style lang="scss">
    .game-played {
        position: relative;
        top: 25vh;
        padding: 0rem 20vw;
        &-paper {
            border: 1.5rem solid hsl(230, 89%, 62%);
        }

        &-scissors {
            border: 1.5rem solid hsl(39, 89%, 49%);
        }

        &-rock {
            border: 1.5rem solid hsl(349, 71%, 52%);
        }
        
        &--main {
            display: flex;
            justify-content: space-around;
        }

        .your-pick p, .computer-pick p{
            text-align: center;
            color: #fff;
            font-size: 1.6rem;
            font-weight: 600;
            margin-bottom: 6rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .your-pick .pick-mb, .computer-pick .pick-mb {
            display: none;
        }

        .your-pick .pick, .computer-pick .pick {
            display: block;
        }

        .result {
            text-align: center;
            p {
                font-weight: 600;
                font-size: 4rem;
                color: #fff;
                text-transform: uppercase;
                margin: 7rem 0rem 3rem 0rem;
            }

            button {
                padding: .7rem 2.5rem;
                border-radius: .5rem;
                text-transform: uppercase;
                font-weight: 600;
                font-size: 1.1rem;
                cursor: pointer;
            }
        }
        .red {
            color: hsl(349, 71%, 52%);
        }

        .blue {
            color: hsl(214, 47%, 23%);
        }
    }

     @media screen and (max-width: 767px) {
        .game-played {
            padding: 0rem 4vw;

            .your-pick .pick, .computer-pick .pick {
                display: none;
            }

            .your-pick .pick-mb, .computer-pick .pick-mb {
                display: block;
            }

            .your-pick p, .computer-pick p{
                text-align: center;
                color: #fff;
                font-size: 1.5rem;
                font-weight: 600;
                margin-top: 2rem;
                text-transform: uppercase;
            }
            .result {
                position: fixed;
                bottom: 10rem;

                p {
                    font-size: 6rem;
                    margin: 7rem 0rem 1rem 0rem;
                }

                button {
                    padding: 1.5rem 6rem;
                    border-radius: 1.2rem;
                    font-size: 1.4rem;
                    letter-spacing: 1px;
                    font-weight: 700;
                }
            }
        }
     }
</style>