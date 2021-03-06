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
      return axios.get(`${process.env.PROD_API}/menu`)
      .then(res => {
        commit('GET_ACTIVE_MENU', res.data)
      })
      .catch(e => {
        console.log(e);
      })
    },
    getAllMenu({commit}) {
      return axios.get(`${process.env.PROD_API}/menu/all`)
      .then(res => {
        commit('GET_FULL_MENU', res.data)
      })
      .catch(e => {
        console.log(e);
      })
    },
    changeItemMenu({commit}, obj) {
      console.log(obj)
      return axios.put(`${process.env.PROD_API}/menu`, obj)
      .then(res => {
        console.log(res.data);
        commit('CHANGE_ITEM_MENU', res.data)
      })
      .catch(e => {
        console.log(e);
      })
    },
    createNewItem({commit}, newItem) {
      return axios.post(`${process.env.PROD_API}/menu`, newItem)
      .then(res => {
        console.log(res.data);
        commit('ADD_NEW_ITEM_MENU', res.data)
      })
      .catch(e => {
        console.log(e);
      })
    },
    removeItem({commit}, id) {
      return axios.delete(`${process.env.PROD_API}/menu`, {data: {_id: id}})
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
//     console.log('???????????????? ?? ??????????????' + err);
//   } else if (err.request) {
//     console.log('???????????????? ?? ????????????????');
//   } else {
//     console.log('????????????:' + err.message);
//   }
// }