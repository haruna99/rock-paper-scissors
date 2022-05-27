<template>
  <div class="home">
    <Header />
    <div class="home-content">
      <Game v-if="gameOn" />
      <GamePlayed v-else/>
      <GameModal />
    </div>
    <RulesBtn />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Game from '@/components/Game.vue'
import GameModal from '@/components/Modal.vue'
import RulesBtn from '@/components/RulesBtn.vue'
import { mapGetters } from 'vuex'
import GamePlayed from '@/components/GamePlayed.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Game,
    GameModal,
    RulesBtn,
    GamePlayed
  },
  computed: {
    ...mapGetters(['gameOn'])
  }
}
</script>

<style lang="scss">
  .home {
    position: relative;
  }
</style>