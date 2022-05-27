<template>
    <div class="rules-btn">
        <button @click="show">rules</button>
    </div>
</template>

<script>
export default {
    methods: {
        show () {
            this.$store.commit("SET_MODAL_STATE", true);
        }
    },
}
</script>

<style lang="scss">
    .rules-btn {
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        button {
            text-transform: uppercase;
            font-size: 1.3rem;
            font-weight: 600;
            background-color: transparent;
            padding: .7rem 2.5rem;
            border: 1px solid #fff;
            color: #fff;
            cursor: pointer;
            border-radius: .5rem;
            transition: all .2s ease-in;
            &:hover {
                transform: scale(1.1);
            }
        }
    }

     @media screen and (max-width: 767px) {
        .rules-btn {
            right: 50%;
            transform: translate(50%);

            button {
                padding: 1rem 3rem;
                font-size: 1.5rem;
                letter-spacing: 1px;
            }
        } 
     }
</style>