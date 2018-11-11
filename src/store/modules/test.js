
const state = {
  count:0,
  num:0
}
const getters = {

}
const mutations = {
  addCount:(state)=>{
    console.log('count')
    state.count ++
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
