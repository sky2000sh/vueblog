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
    // '/detail/:id' 의 /:id에서 :는 '아무 문자'를 의미 => url의 파라미터 / id는 작명하기
    // id이후 정규식 입력도 가능 => path: '/detail/:id(\\d+)',
    path: '/detail/:id',
    component: Detail,
    },
    {
      // 404 페이지
      path: '/:dfhajfhsdiufhsdu',
      component: HomeTitle,
      },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
