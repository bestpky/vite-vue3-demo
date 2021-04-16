import {createRouter, createWebHistory} from 'vue-router'
import page1 from '/@views/demo/page1.vue'
import page2 from '/@views/demo/page2.vue'
import demo from '/@views/demo/index.vue'
import {generateAutoRoute} from '../utils/generate-auto-route'

const demoPage = generateAutoRoute({
  path: '/demo',
  // requireContext: require.context('../views/demo', true, /\.(vue|[jt]sx?)$/, 'lazy'),
  requireContext: import.meta.globEager('../views/demo/*')
});

const routes = [
  { 
    path: "/",
    redirect: '/demo'
  },
  // ...demoPage
  {
    path: '/demo',
    component: demo,
    children: [{
      path: '/demo/page1',
      component: page1,
    },{
      path: '/demo/page2',
      component: page2,
    }]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router