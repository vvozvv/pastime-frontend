import { createStore } from "vuex"
import axios from 'axios'
// service
import {HTTP} from '@/../config/http.service'
// modules
import auth from './auth'
import operations from './operations'
import games from './game'
import user from './user'
import timer from './timer'
import gameMemoryCard from './game/memoryCardGame'
import twentyOne from './game/twentyOne'
import adminMenu from './admin/menu'
import adminGames from './admin/game'


export default createStore({
  state: {
    users: [],
    toggleSidebar: !!localStorage.getItem('toggleSidebar') || true,
    showPopup: false
  },
  mutations: {
    TOGGLE_SIDEBAR_PANEL: state => {
      localStorage.setItem('toggleSidebar', !state.toggleSidebar)
      state.toggleSidebar = !state.toggleSidebar
    },
    SHOW_END_GAME_POPUP: state => {
      state.showPopup = !state.showPopup
    },
    GET_ALL_USERS: (state, payload) => {
      state.users = payload
    }
  },
  actions: {
    getAllUsers({commit}) {
      return HTTP.get('users')
      .then((res) => {
        commit('GET_ALL_USERS', res.data)
      })
      .catch((e) => {
        console.error(e);
      })
    },
    toggleSidebarPanel({commit}) {
      commit('TOGGLE_SIDEBAR_PANEL')
    },
    showEndGamePopup({commit}) {
      commit('SHOW_END_GAME_POPUP')
    }
  },
  getters: {
    users: state => state.users,
    toggleSidebar: state => state.toggleSidebar,
    showPopup: state => state.showPopup
  },
  modules: {
    operations,
    auth,
    games,
    timer,
    user,
    adminMenu, 
    adminGames, 
    gameMemoryCard,
    twentyOne,
  },
});
