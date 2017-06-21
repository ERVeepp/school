import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import a from '@/components/a.vue'
import b from '@/components/b.vue'
import c from '@/components/c.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        body: home
      }
    },
    {
      path: '/a',
      name: 'a',
      components: {
        body: a
      }
    },
    {
      path: '/b',
      name: 'b',
      components: {
        body: b
      }
    },
    {
      path: '/c',
      name: 'c',
      components: {
        body: c
      }
    }
  ],
  template: {
    user: `
      <div>{{ $route.params }}</div>
    `
  }
})
