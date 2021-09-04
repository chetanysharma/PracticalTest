import Router from 'vue-router'
import Vue from 'vue'
import Home from '../src/components/pages/home.vue'
import Login from '../src/components/pages/login.vue'
import Dashboard from '../src/components/pages/dashboard.vue'
import store from '../src/store'

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            name: "Home",
            path: "/",
            component: Home
        },
        {
            name: "Login",
            path: "/login",
            component: Login
        },
        {
            name: "Dashboard",
            path: "/dashboard",
            component: Dashboard,
            beforeEnter: (to, from, next) => {
                let isAuthenticated = store.state.authenticated
                console.log('authenticated', isAuthenticated )
                if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
                // if the user is not authenticated, `next` is called twice
                next()
            }
        }
    ]
})

export default router