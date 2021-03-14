import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home";
import Users from "../views/Users/Index";
import Show from "../views/Users/Show";

Vue.use(Router);

export default new Router({
routes: [

    /* Users */
    { path: '/users',  name: 'Users',  component: Users },
    { path: '/users/:id', name: 'Show', component: Show },

    /* Index */
    { path: '/', name: 'Home', component: Home },

    /* All */
    { path: '*', redirect: '/' }
]
})
