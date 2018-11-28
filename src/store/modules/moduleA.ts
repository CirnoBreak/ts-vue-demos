import { ActionTree, GetterTree, MutationTree } from 'vuex'

export interface State {
  text: string
}

const state: State = {
  text: 'hello'
}

const mutations: MutationTree<any> = {
  addText (state: State, txt: string): void {
    state.text = txt
  }
}

const actions: ActionTree<any, any> = {
  setText ({ commit }, txt: string): void {
    commit('addText', txt)
  }
}

const getters: GetterTree<any, any> = {
  getText (state: State): string {
    return state.text + '!'
  }
}

const moduleA = {
  state,
  mutations,
  actions,
  getters
}

export default moduleA
