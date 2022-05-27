<template>
    <div class="game-btn" @click="playGame">
        <img :src="require(`@/assets/img/${image}`)" alt="">
    </div>
</template>

<script>
export default {
    props: ["image", "func"],
    methods: {
        playGame() {
            this.func()
        }
    }
}
</script>

<style lang="scss">
    .game-btn {
            background-color: #fff;
            cursor: pointer;
            display: flex;
            justify-content: center;
            width: 13rem;
            height: 13rem;
            border-radius: 50%;
            padding: 2.5rem;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
           
        }
</style>