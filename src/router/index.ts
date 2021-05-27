import { createRouter, createWebHistory } from 'vue-router'
import page1 from '/@views/page1.vue'
import page2 from '/@views/page2.vue'
import page3 from '/@views/page3.vue'
import page4 from '/@views/page4.vue'
import page5 from '/@views/page5.vue'

const routes = [
    {
        path: '/',
        redirect: '/page1'
    },
    {
        path: '/page1',
        component: page1
    },
    {
        path: '/page2',
        component: page2
    },
    {
        path: '/page3',
        component: page3
    },
    {
        path: '/page4',
        component: page4
    },
    {
        path: '/page5',
        component: page5
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
