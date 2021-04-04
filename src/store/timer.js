import axios from 'axios'
import moment from 'moment'

export default ({
  state: {
    timer: 0,
    time: "--:--",
    startTime: null,
    process: true,
    diffTime: "--:--"
  },
  mutations: {
    CHANGE_TIMER: (state) => {
      state.startTime = moment();
      state.timer = setInterval(() => {
        state.time = moment(moment().diff(state.startTime)).format("mm:ss")  
      }, 1000);
    },
    STOP_TIMER: (state) => {
      state.time = "--:--"
      clearInterval(state.timer)
    },
    RESET_TIMER: (state) => {
      clearInterval(state.timer)
    },
    COUNTDOWS: (state, payload) => {
      state.time = moment(60 * payload * 1000).format("mm:ss")  
      state.timer = setInterval(() => {
        state.time = moment(state.time, "mm:ss").subtract(1, 'seconds').format("mm:ss")  
      }, 1000);
    },
    RESET_COUNTDOWS: (state) => {
      state.diffTime = "--:--"
    },
    DIFFERENT_TIME: (state, payload) => {
      let date = moment(60 * payload * 1000).format("mm:ss")
      state.diffTime = moment.utc(moment.duration(date) - moment.duration(state.time)).format('HH:mm')
    }
  },
  actions: {
    startTimer({commit}) {
      commit('CHANGE_TIMER');
    },
    stopTimer({commit}) {
      commit('STOP_TIMER')
    },
    resetTimer({commit}) {
      commit('RESET_TIMER')
    },
    startCountdown({commit}, val) {
      commit('COUNTDOWS', val)
    },
    resetCountdown({commit}) {
      commit('RESET_COUNTDOWS')
    },
    differentTime({commit}, val) {
      commit('DIFFERENT_TIME', val)
    }
  },
  getters: {
    time: state => state.time,
    timer: state => state.timer,
    diffTime: state => state.diffTime
  },
})