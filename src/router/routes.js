
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
    path: '/categories',
    component: () => import('pages/Categories'),
  },
  {
    path: '/contact',
    component: () => import('pages/Contact')
  },
  {
    path: '/categories/:sketches',
    component: () => import('pages/Sketches'),
    props: true
  },
  {
    path: '/categories/:sketches/:id',
    component: () => import('pages/File'),
    props: true
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/admin',
    component: () => import('layouts/Admin'),
    children: [
      {
        path:'/',
        component: () => import('pages/Admin/Home')
      }
    ]
  },

]


export default routes
