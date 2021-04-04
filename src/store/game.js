import axios from 'axios'
// service
import {HTTP} from '@/../config/http.service'

export default ({
  state: {
    activeGames: {}
  },
  mutations: {
    GET_ACTIVE_GAME: (state, payload) => {
      state.activeGames = payload
    },
  },
  actions: {
    getActiveGames({commit}) {
      return HTTP.get('games/active')
      .then(res => {
        commit('GET_ACTIVE_GAME', res.data)
      })
      .catch(e => {
        console.error(e);
      }) 
    },
  },
  getters: {
    activegames: state => state.activeGames,
  },
})