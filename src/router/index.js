import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/components/Me'
import Report from '@/components/Report'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Me',
        component: Me
    },
    {
        path: '/reports/week/1',
        name: 'Redovisning',
        component: Report
    }
  ]
})
