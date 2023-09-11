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
                .then(res => {
                    const { data, links } = res.data;
                    this.projects = { data, links };
                })
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
        <div v-if="projects.data.length" class="row">

            <!-- Dynamic Card Here -->
            <AppCard v-for="project in projects.data" :key="project.id" :data="project" />

            <!-- Pagination Navbar -->
            <nav>
                <ul class="pagination">
                    <li v-for="element in projects.links" :key="element.label" class="page-item">
                        <button :disabled="!element.url" :class="{ active: element.active }" class="page-link"
                            v-html="element.label"></button>
                    </li>
                </ul>
            </nav>

        </div>

        <div v-else class="d-flex justify-content-center align-item-center mt-3">
            <h1>Non ci sono progetti da visualizzare</h1>
        </div>



    </main>
</template>

<style></style>