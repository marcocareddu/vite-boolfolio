<script>
import axios from 'axios';

// Api Endpoints
const baseEndpoint = 'http://127.0.0.1:8000/api/projects/'

export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: [],
            apiLoading: false
        }
    },
    methods: {
        getProject(baseEndpoint = 'http://127.0.0.1:8000/api/projects/') {
            this.apiLoading = true;
            axios.get(baseEndpoint + `${this.$route.params.id}`)
                .then(res => {
                    this.project = res.data;
                })
                .catch(err => { console.log(err) })
                .then(() => { this.apiLoading = false })
        }
    },
    created() {
        this.getProject();
    }
};
</script>

<template>
    <div class="container">
        <h1>PROVA DETTAGLIO {{ project.name }}</h1>
    </div>
</template>

<style scoped></style>

