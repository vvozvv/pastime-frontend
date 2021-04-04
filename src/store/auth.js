import axios from 'axios'
// service
import {HTTP} from '@/../config/http.service'


export default ({
  state: {
    refreshToken: localStorage.getItem('refreshToken') || null,
    token: localStorage.getItem('user-token') || "",
    user: localStorage.getItem('user') || "Не найденно",
    coin: localStorage.getItem('coin') || 0,
    id: localStorage.getItem('id') || null,
    error: ''
  },
  mutations: {
    AUTH_ACCESS(state, {token, refreshToken, user, coin, id}) {
      state.token = token
      state.user = user
      state.coin = coin
      state.refreshToken = refreshToken
      state.id = id

      localStorage.setItem('user-token', token)
      localStorage.setItem('user-token', token)
      localStorage.setItem('user-token', token)
      localStorage.setItem('refreshToken', refreshToken)
      localStorage.setItem('coin', coin)
      localStorage.setItem('user', user)
      localStorage.setItem('id', id)
      
      axios.defaults.headers.common['Authorization'] = token
    },
    REFRESH_ACCESS(state, payload) {
      state.token = payload.token
      localStorage.setItem('user-token', payload.token)
      axios.defaults.headers.common['Authorization'] = payload.token
    },
    REGISTER_USER(state, user) {
      state.user = user
    },
    LOGOUT(state){
      state.user = null
      state.token = '',
      state.refreshToken = '',
      state.coin = 0
      delete axios.defaults.headers.common['Authorization']
    },
    COIN: (state, payload) => {
      state.coin = payload.coin
      localStorage.setItem('coin', payload.coin)
    },
    ERROR: (state) => {
      state.error = 'Неверный логин или пароль'
    }
  },
  actions: {
    getUser({commit}, user) {
      return new Promise((resolve, reject) => {
        HTTP.post('login', {...user})
        .then(res => {
          commit('AUTH_ACCESS', {
            token: res.data.token,
            refreshToken: res.data.refreshToken,
            user: res.data.user,
            coin: res.data.coin,
            id: res.data.id,
          })
          resolve(res)
        })
        .catch(error => {
          localStorage.removeItem('user-token')
          commit('ERROR')
          reject(error)
        })
      })
    },
    registerUser({commit}, user) {
      return new Promise((resolve, reject) => {
        HTTP.post('register', {...user})
        .then(res => {
          commit('REGISTER_USER', res.data)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
      })      
    },
    logout({commit, state}) {
      return HTTP.post('logout', {
        refreshToken: state.refreshToken
      })
      .then(() => {
        localStorage.removeItem('user-token')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('coin')
        localStorage.removeItem('id')
        localStorage.removeItem('user')
        delete axios.defaults.headers.common['Authorization']
        commit('LOGOUT')
      })
      .catch(e => {
        console.error(e);
      })
    },
    refreshToken({commit, state}) {
      return HTTP.post('refresh', {refreshToken: state.refreshToken})
      .then(res => {
        console.log(res.data);
        commit('REFRESH_ACCESS', res.data)
      })
    },
    getCoinUser({commit, state}) {
      return HTTP.post('user/coin', {id: state.id})
      .then(res => {
        commit('COIN', res.data)
      })
      .catch(e => {
        console.error(e);
      })
    }
  },
  getters: {
    user: state => state.user,
    isLoggedIn: state => !!state.token,
    refreshToken: state => state.refreshToken,
    coin: state => state.coin,
    token: state => state.token,
    id: state => state.id,
    error: state => state.error
  },
});
