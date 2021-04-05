import axios from 'axios'

export default ({
  state: {
    activeListMenu: [],
    fullMenu: []
  },
  mutations: {
    GET_ACTIVE_MENU(state, payload) {
      state.activeListMenu = payload
    },
    GET_FULL_MENU(state, payload) {
      state.fullMenu = payload
    },
    CHANGE_ITEM_MENU(state, payload) {
      let item = state.fullMenu.find(el => el._id === payload._id)
      item.title = payload.title
      item.url = payload.url
      item.active = payload.active
    },
    ADD_NEW_ITEM_MENU(state, payload) {
      state.activeListMenu.push(payload)
    },
    REMOVE_ITEM_MENU(state, payload) {
      state.activeListMenu = state.activeListMenu.filter(el => el._id !== payload)
    }
  },
  actions: {
    getACtiveList({commit}) {
      return axios.get('https://damp-bastion-54383.herokuapp.com/api/v1/menu')
      .then(res => {
        commit('GET_ACTIVE_MENU', res.data)
      })
      .catch(e => {
        console.log(e);
      })
    },
    getAllMenu({commit}) {
      return axios.get('https://damp-bastion-54383.herokuapp.com/menu/all')
      .then(res => {
        commit('GET_FULL_MENU', res.data)
      })
      .catch(e => {
        console.log(e);
      })
    },
    changeItemMenu({commit}, obj) {
      console.log(obj)
      return axios.put('https://damp-bastion-54383.herokuapp.com/api/v1/menu', obj)
      .then(res => {
        console.log(res.data);
        commit('CHANGE_ITEM_MENU', res.data)
      })
      .catch(e => {
        console.log(e);
      })
    },
    createNewItem({commit}, newItem) {
      return axios.post('https://damp-bastion-54383.herokuapp.com/menu', newItem)
      .then(res => {
        console.log(res.data);
        commit('ADD_NEW_ITEM_MENU', res.data)
      })
      .catch(e => {
        console.log(e);
      })
    },
    removeItem({commit}, id) {
      return axios.delete('https://damp-bastion-54383.herokuapp.com/api/v1/menu', {data: {_id: id}})
      .then(res => {
        console.log(res);
        commit('REMOVE_ITEM_MENU', id)
      })
    }
  },
  getters: {
    activeMenu: state => state.activeListMenu,
    fullMenu: state => state.fullMenu,
  },
})

// function errorHandler(err) {
//   if (err.response) {
//     console.log('Проблемы с ответом' + err);
//   } else if (err.request) {
//     console.log('Проблемы с запросом');
//   } else {
//     console.log('Ошибка:' + err.message);
//   }
// }