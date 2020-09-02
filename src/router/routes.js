
const routes = [
  {
    path: '/',
    component: () => import('pages/Main'),
    children: [
      { path: '', component: () => import('pages/Main.vue') }
    ]
  },
  {
    path: '/tutorials',
    component: () => import('pages/Tutorials')
  },
  {
    path: '/examples',
    component: () => import('pages/Examples'),
  },
  {
    path: '/contact',
    component: () => import('pages/Contact')
  },
  {
    path: '/examples/sketches',
    component: () => import('pages/Sketches'),
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]


export default routes
