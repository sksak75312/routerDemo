import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/RandomUser.vue')
    },
    {
      path: '/pokemongo',
      component: () => import('../views/PokemonGo.vue')
    },
  ]
})

export default router
