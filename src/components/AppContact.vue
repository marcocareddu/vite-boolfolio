<script></script>
<template>
    <div class="container mt-5">

        <form>
            <!-- Email Address Input -->
            <div class="mb-5">
                <label for="mail" class="form-label">Indirizzo email</label>
                <input type="email" class="form-control" id="mail" placeholder="Inserisci la tua email">
            </div>

            <!-- Email Address Input -->
            <div class="mb-5">
                <label for="subject" class="form-label">Oggetto</label>
                <input type="text" class="form-control" id="subject" placeholder="Inserisci l'oggetto">
            </div>

            <!-- Email Text Input -->
            <div class="mb-3">
                <label for="mail-text" class="form-label">Testo email</label>
                <textarea class="form-control" id="mail-text" rows="5"></textarea>
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-light">Invia</button>
            </div>
        </form>
    </div>
</template>
<style></style>