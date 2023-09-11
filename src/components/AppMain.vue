<script>
import axios from 'axios';
import AppCard from './AppCard.vue';

// Api Endpoints
const baseEndpoint = 'http://127.0.0.1:8000/api/projects/'

export default {
    components: { AppCard },
    data() {
        return {
            projects: []
        }
    },
    methods: {
        fetchProjects() {
            axios.get(baseEndpoint).then(res => { this.projects = res.data; })
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>
    <main class="container">
        <div class="row">
            <AppCard v-for="project in projects" :key="project.id" :data="project" />
        </div>
    </main>
</template>

<style></style>