import requestData from '../../api'

const state = {
  data: 0,
  status: 'loaded'
}

const getters = {
  requestData: state => state.data,
  requestDataStatus: state => state.status
}

const actions = {
  fetchRequestData({commit}) {
    commit('FETCH_DATA')
    requestData.myRequest()
      .then(data => commit('UPDATE_DATA', {data}))
      .catch(err => commit('ERROR_DATA', {err}))
  }
}

const mutations = {
  'FETCH_DATA'(state) {
    state.status = 'loading'
  },
  'UPDATE_DATA'(state, {data}) {
    state.status = 'loaded'
    state.data = data
  },
  'ERROR_LOAD_DATA'(state) {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
