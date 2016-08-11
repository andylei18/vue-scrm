import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    history: true
})

router.map({
    // '/': {
    //     name: 'index',
    //     component: (resolve) => {
    //         require(['./views/app.vue'], resolve)
    //     }
    // },
})

export default router
