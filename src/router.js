//library
import Vue from 'vue';
import VueRouter from 'vue-router';

//path file
import home from '@/pages/home.vue';
import searchIp from '@/pages/searchIp.vue';

Vue.use(VueRouter);

var router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            component:home
        },

        {
            path: '/search_ip',
            component:searchIp
        }

    ]
})

export default router;