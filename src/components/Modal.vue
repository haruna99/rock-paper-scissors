<template>
    <div class="game-modal" v-if="showModal">
        <div class="modal-head">
            <div class="modal-text">Rules</div>
            <div class="modal-close" @click="hide">
                <img src="../assets/img/icon-close.svg" alt="">
            </div>
        </div>
        <div class="rules-img">
            <img src="../assets/img/image-rules.svg" alt="">
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        methods: {
            hide () {
                this.$store.commit("SET_MODAL_STATE", false);
            }
        },
        computed: {
            ...mapGetters(["showModal"])
        }
    }
</script>

<style lang="scss">
    .game-modal {
        background-color: #fff;
        height: 30rem;
        width: 30rem;
        padding: 2rem;
        border-radius: .5rem;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
        transition: all ease 1s;

        .modal-text {
            color: hsl(214, 47%, 23%);
            text-transform: uppercase;
            font-size: 1.7rem;
            font-weight: 700;
        }

        .modal-head {
            display: flex;
            justify-content: space-between;
        }

        .modal-close {
            cursor: pointer;
            img {
                transition: all .2s ease-in-out;
                &:hover {
                    transform: scaleX(1.2);
                }
            }
        }
        .rules-img {
            padding-top: 4rem;
            display: flex;
            justify-content: center;
            img {
                width: 80%;
                
            }
        }
    }

</style>