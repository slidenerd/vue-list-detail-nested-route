
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Title from '@/components/_Title'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/news/:title/:id',
          name: 'index-news-id-title',
          component: Title
        }
      ]
    }
  ]
})
