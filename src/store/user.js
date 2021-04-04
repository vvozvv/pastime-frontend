import axios from 'axios'
import {HTTP} from '@/../config/http.service'

export default ({
  state: {
    users: {}
  },
  mutations: {
    GET_USER: (state, payload) => {
      state.users = payload
    },
  },
  actions: {
    getAllUsers({commit}) {
      return HTTP.get('user')
      .then(res => {
        commit('GET_USER', res.data)
      })
      .catch()
    },
  },
  getters: {
    usersTop: state => state.users
  }
})