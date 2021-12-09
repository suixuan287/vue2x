import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        search_add_mutation (state, payload) {
            state.list.push(payload)
        },
        search_reduce_mutation (state, payload) {
            const { key } = payload;
            const index = state.list.findIndex(item => item.key == key)
            state.list.splice(index, 1)
        },
    }
})

export default store
