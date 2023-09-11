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
            axios.get(baseEndpoint)
                .then(res => { this.projects = res.data.data; })
                .catch(err => { console.log(err) })
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>
    <main class="container">

        <!-- Hide if empty -->
        <div v-if="projects.length" class="row">

            <!-- Dynamic Card Here -->
            <AppCard v-for="project in projects" :key="project.id" :data="project" />
        </div>

        <div v-else class="d-flex justify-content-center align-item-center mt-3">
            <h1>Non ci sono progetti da visualizzare</h1>
        </div>
    </main>
</template>

<style></style>