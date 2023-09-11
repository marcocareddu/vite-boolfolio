<script>
export default {
    props: { data: Object }
}
</script>

<template>
    <div class="card col-5 m-3 text-bg-dark">
        <img src="data.thumb" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <h5 class="card-title">{{ data.name }}</h5>
                <p class="card-text">{{ data.description }}</p>
            </div>

            <!-- Buttons -->
            <div class="d-flex">

                <!-- Github Button -->
                <button class="btn btn-outline-dark"><i class="fa-brands fa-github"></i></button>

                <!-- Edit Button -->
                <button class="btn btn-outline-warning mx-3"><i class="fa-solid fa-pencil"></i></button>

                <!-- Show Button -->
                <button class="btn btn-outline-primary mx-3"><i class="fa-solid fa-eye"></i></button>

                <!-- Delete Button -->
                <button class="btn btn-outline-danger text-black"><i class="fa-solid fa-trash-can"></i></button>

            </div>
        </div>
    </div>
</template>

<style></style>