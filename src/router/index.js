import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeAddView from '../views/RecipeAddView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import RecipeView from '../views/RecipeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recipe',
    name: 'recipe-add',
    component: RecipeAddView
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: RecipeView
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: InscriptionView
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: ConnexionView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
