<script>
import axios from 'axios';

// Api Endpoints
const baseEndpoint = 'http://127.0.0.1:8000/api/projects/'

export default {
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
    <div class="container">
        <ul>
            <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
        </ul>
    </div>
</template>

<style></style>