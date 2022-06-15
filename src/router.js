import { createWebHistory, createRouter } from 'vue-router'
import List from './components/List.vue'
import HomeTitle from './components/HomeTitle.vue'
import Detail from './components/Detail.vue'

const routes = [
    {
    path: '/hometitle',   // '/경로',
    component: HomeTitle, // import해온 컴포넌트,
    },
    {
    path: '/list',   // '/경로',
    component: List, // import해온 컴포넌트,
    },
//   {
//     path: '/list',   // '/경로',
//     component: List.vue, // import해온 컴포넌트,
//   }
    {
    path: '/detail',
    component: Detail,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
