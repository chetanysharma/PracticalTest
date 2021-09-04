import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        authenticated: false,
        activeUser: {}
    },
    mutations: {
        setAuthentication (state , status) {
            state.authenticated = status
        },
        setactiveUser (state , status) {
            state.activeUser = status
        }
    }
})

export default store