import axios from 'axios'
// service
import {HTTP} from '@/../config/http.service'

export default ({
  state: {
    games: {}    
  },
  mutations: {
    GET_GAME: (state, payload) => {
      state.games = payload
    },
    REMOVE_GAME: (state, payload) => {
      state.games = state.games.filter(el => el._id !== payload._id)
    },
    ADD_GAME: (state, payload) => {
      state.games.push(payload)
    },
    CHANGE_UPDATE_GAME: (state, payload) => {
      let game = state.games.filter(el => el._id !== payload._id)
    }
  },
  actions: {
    getGames({commit}) {
      return HTTP.get('games')
      .then(res => {
        commit('GET_GAME', res.data)
      })
      .catch(e => {
        console.log(e);
      }) 
    },
    deleteGame({commit}, id) {
      console.log(id);
      return HTTP.delete('games', {data: {_id: id}})
      .then(res => {
        console.log('Результат');
        console.log(res.data);
        commit('REMOVE_GAME', res.data)
      })
      .catch(e => {
        console.log(e);
      })
    },
    addGame({commit}, game) {
      return HTTP.post('/games', game)
      .then(res => {
        console.log(res.data);
        commit('ADD_GAME', res.data)
      })
      .catch(e => {
        console.log(e);
      })
    },
    updateGame({commit}, data) {
      return HTTP.post('games/update', data)
      .then(res => {
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      })
    }
  },
  getters: {
    games: state => state.games,
  },
})