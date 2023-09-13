<script>
import axios from 'axios';
import AppLoader from './AppLoader.vue';

// Api Mail Endpoints
const baseEndpoint = 'http://127.0.0.1:8000/api/mail-message'

export default {
    name: 'ProjectDetail',
    components: { AppLoader },
    data() {
        return {
            apiLoading: false,
            form: {
                email: '',
                subject: '',
                mailText: ''
            }
        }
    }
};

</script>
<template>
    <AppLoader v-if="apiLoading" />

    <!-- Email Form -->
    <div v-else class="container mt-5">
        <form>

            <!-- Email Address Input -->
            <div class="mb-5">
                <label for="mail" class="form-label">Indirizzo email</label>
                <input v-model.trim="form.email" type="email" class="form-control" id="mail"
                    placeholder="Inserisci la tua email">
            </div>

            <!-- Email Subject Input -->
            <div class="mb-5">
                <label for="subject" class="form-label">Oggetto</label>
                <input v-model.trim="form.subject" type="text" class="form-control" id="subject"
                    placeholder="Inserisci l'oggetto">
            </div>

            <!-- Email Text Input -->
            <div class="mb-3">
                <label for="mail-text" class="form-label">Testo email</label>
                <textarea v-model.trim="form.mailText" class="form-control" id="mail-text" rows="5"></textarea>
            </div>

            <!-- Submit Button -->
            <div class="d-flex justify-content-end">
                <button class="btn btn-light">Invia</button>
            </div>

        </form>
    </div>
</template>
<style></style>