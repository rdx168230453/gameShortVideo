import Vue from 'vue'
import Vuex from 'vuex'

import test from './modules/test.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		test,
	},
	state:{
		num:0
	},
	mutations:{
		addNum(state){
			state.num++
	
		}
	},
	actions:{
		myAddNum(state){
			state.commit('addNum')
		}
	}
})
export default store
