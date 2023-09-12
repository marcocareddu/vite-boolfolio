import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../components/AppHome.vue';
import ProjectDetail from '../components/projects/ProjectDetail.vue';
import ProjectsList from '../components/projects/ProjectsList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: AppHome },
        { path: '/projects', name: 'projects', component: ProjectsList },
        { path: '/projects/:id', name: 'project-detail', component: ProjectDetail }
    ]


})

export { router };