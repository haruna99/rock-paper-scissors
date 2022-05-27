import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameOn: true,
    showModal: false,
    choice: null,
    win: false,
    computerChoice: null,
    score: 0
  },
  getters: {
    showModal(state) {
      return state.showModal
    },
    gameOn(state) {
      return state.gameOn
    },
    choice(state) {
      return state.choice
    },
    win(state) {
      return state.win
    },
    computerChoice(state) {
      return state.computerChoice
    },
    score(state) {
      return state.score
    }
  },
  mutations: {
    SET_MODAL_STATE(state, payload) {
      state.showModal = payload
    },
    SET_GAME_STATE(state, payload) {
      state.gameOn = payload
    },
    SET_CHOICE(state,payload) {
      state.choice = payload
    },
    SET_RESULT(state, payload) {
      state.win = payload
    },
    SET_COMPUTER_CHOICE(state, payload) {
      state.computerChoice = payload
    },
    SET_SCORE(state, payload) {
      state.score += payload
    }
  }
})
