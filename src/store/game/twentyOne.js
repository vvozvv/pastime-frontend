import axios from 'axios'

export default ({
  state: {
    cards: [],
    currentCard: null,
    // ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    ranks: [
      {rank: 'A', value: 11},
      {rank: '2', value: 2},
      {rank: '3', value: 3},
      {rank: '4', value: 4},
      {rank: '5', value: 5},
      {rank: '6', value: 6},
      {rank: '7', value: 7},
      {rank: '8', value: 8},
      {rank: '9', value: 9},
      {rank: '10', value: 10},
      {rank: 'J', value: 2},
      {rank: 'Q', value: 3},
      {rank: 'K', value: 4},
    ],
    suits: ['♥','♦','♠','♣'],
    suitColor: {
      '♠': 'black',
      '♣': 'black',
      '♦': 'red',
      '♥': 'red',
    },
  },
  mutations: {
    GENERATE_CARD: (state, payload) => {
      state.cards = payload
    },
    CHANGE_CURRENT_CARD: (state, payload)  => {
      state.currentCard = payload
      state.cards = state.cards.filter(card => card.id != payload.id)
    },
    // REMOVE_CARD: (state, id) => {
    //   state.cards = state.cards.filter(card => card.id != id)
    // }
  },
  actions: {
    generateCard({commit, state}) {
      this.cards = []
      let id = 1

      for (let s = 0; s < state.suits.length; s++) {
        for( let r = 0; r < state.ranks.length; r++ ) {
          let card = {
            id: id,
            rank: state.ranks[r].rank,
            value: state.ranks[r].value,
            suit: state.suits[s]
          }
          this.cards.push(card);
          id++;
        }
      }
      commit('GENERATE_CARD', this.cards)
    },
    getRandomCard({commit, state}) {
      let card = state.cards[Math.floor(Math.random() * state.cards.length)]
      commit('CHANGE_CURRENT_CARD', card)
      // commit('REMOVE_CARD', card.id)
    }
  },
  getters: {
    twentyOneCards: state => state.cards,
    twentyOneCurrentCard: state => state.currentCard,
    openedCards: state => state.openedCards,
  },
})