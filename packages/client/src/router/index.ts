import { createRouter, createWebHistory } from 'vue-router'
import Home from '../homepageViews/home.vue'
import CreateGame from '../homepageViews/create-game.vue'
import CardsList from '../homepageViews/cards-list.vue'
import Game from '../mainViews/game.vue'
import Homepage from '../mainViews/homepage.vue'
import Spectate from '@/homepageViews/spectate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Homepage,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'create-game',
          name: 'Create Game',
          component: CreateGame
        },
        {
          path: 'spectate',
          name: 'Spectate',
          component: Spectate
        },
        {
          path: 'cards-list',
          name: 'Cards List',
          component: CardsList
        }
      ]
    },
    {
      path: '/game/:id',
      name: 'Game',
      component: Game
    },
  ]
})

export default router; 