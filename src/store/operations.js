import axios from 'axios'

export default ({
  state: {
    lastOperation: [],
    lastUserOperation: [],
    operationLoading: false
  },
  mutations: {
    GET_LAST_GAME(state, payload) {
      state.lastOperation = payload
    },
    GET_USER_OPERATION(state, payload) {
      state.lastUserOperation = payload
    },
    SEND_OPERTAION: (state, payload) => {
      localStorage.coin = payload 
    }
  },
  actions: {
    getLastOperation({commit}) {
      return axios.get( `${process.env.PROD_API}/operations/get`)
      .then(res => {
        commit('GET_LAST_GAME', res.data)
      })
    },
    getUserLastOperations({commit}, id) {
      return axios.post(`${process.env.PROD_API}/operations/user`, {id: id})
      .then(res => {
        commit('GET_USER_OPERATION', res.data)
      })
    },
    sendOperationResult({commit, state}, result) {
      state.operationLoading = true
      return axios.post(`${process.env.PROD_API}/operations/add`, result)
      .then(res => {
        state.operationLoading = false
        commit('SEND_OPERTAION', res.data)
      })
      .catch(e => {
        console.error(e);
      })
    },
  },
  getters: {
    lastOperation: state => state.lastOperation,
    lastUserOperation: state => state.lastUserOperation,
    updateCounter: state => state.updateCounter,
    operationLoading: state => state.operationLoading
  }
})