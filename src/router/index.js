import {createRouter,createWebHistory} from "vue-router";
import Home from "../view/Home.vue";
import About from "../view/about.vue"
const routes = [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/about",
        name:"About",
        component:() =>import("../view/about.vue")
    }
]
const router = createRouter({
    history:createWebHistory('/***'),
    routes
})

export default router;
