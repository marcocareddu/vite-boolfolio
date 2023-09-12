import { createRouter, createWebHistory } from 'vue-router';
import AppMain from '../components/AppMain.vue';
import ProjectDetail from '../components/ProjectDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: AppMain },
        { path: '/projects', name: 'projects', component: ProjectDetail }
    ]


})

export { router };