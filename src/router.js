import Vue from "vue";
import VueRouter from 'vue-router';
import home from './components/hello.vue';
import room from './components/room.vue';

Vue.use(VueRouter);

export default function () {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/home',
                component: home
            },
            {
                path: '/room',
                component: room
            },
            {
                path: '/',
                redirect: '/home'
            }
        ]
    })
}

