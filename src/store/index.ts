import Vue from 'vue'
import Vuex from 'vuex'
import moduleA, { State as moduleAState } from './modules/moduleA'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moduleA
  }
})

export interface State {
  moduleA: moduleAState
}
