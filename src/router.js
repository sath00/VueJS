import Vue from 'vue'
import Router from 'vue-router'
import SkillsComp from './components/SkillsComp.vue'
import AboutComp from './components/AboutComp.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'skills',
            component: SkillsComp
        },
        {
            path: '/about/:name',
            name: 'about',
            component: AboutComp
        }
    ]
})
