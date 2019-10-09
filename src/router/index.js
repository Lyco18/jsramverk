import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/components/Me'
import Report from '@/components/Report'
import Report2 from '@/components/Report2'
import Form from '@/components/Form'

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
    },
    {
        path: '/reports/week/2',
        name: 'Redovisning',
        component: Report2
    },
    {
        path: '/form',
        name: 'Form',
        component: Form
    }
  ]
})
