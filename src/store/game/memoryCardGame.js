import axios from 'axios'

export default ({
  state: {
    cards: [
      { id: 1, name: "express", image: "find-card-5.png" },
      { id: 2, name: "mongo", image: "find-card-4.png" },
      { id: 3, name: "nodejs", image: "find-card-3.png" },
      { id: 4, name: "webpack", image: "find-card-2.png" },
      { id: 5, name: "babel", image: "find-card-1.png" },
    ]
  },
  mutations: {
    CLONE_CARDS: state => {
      let arr = JSON.parse(JSON.stringify(state.cards))
      state.cards = [...state.cards, ...arr]
    }
  },
  actions: {
    shuffleDeck({state}) {
      for (let i = state.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [state.cards[i], state.cards[j]] = [state.cards[j], state.cards[i]];
      }
    },
    cloneCards({commit}) {
      commit('CLONE_CARDS')
    }
  },
  getters: {
    cards: state => state.cards
  },
})