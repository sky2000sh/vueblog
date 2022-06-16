import { createWebHistory, createRouter } from 'vue-router'
import List from './components/List.vue'
import HomeTitle from './components/HomeTitle.vue'
import Detail from './components/Detail.vue'
import Author from './components/Author.vue'
import Comment from './components/Comment.vue'

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

    // nested routes 만드는 법:-
    // 사용이유 : 특정페이지 안에서 route를 나누고싶을 때 사용한다.
    // children : {} 안에 path를 또 다시 만든다.
    // children으로 nested routes를 생성할 때는 path에 /를 넣지않고 바로 path명을 입력한다.
    children: [
      {
        path: 'author',
        component: Author,
      },
      {
        path: 'comment',
        component: Comment,
      },
    ]
    },
    {
      // 404 페이지
      path: '/:dfhajfhsdiufhsdu', // (.*) => 모든 문자가 들어오면 이라는 정규식 문법
      component: HomeTitle,  // <= 여기에 404 페이지 컴포넌트를 만들기
      },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
