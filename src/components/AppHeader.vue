<script>
</script>

<template>
    <header>

        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body">
            <div class="container">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <RouterLink class="nav-link active" :to="{ name: 'home' }">Home</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link active" :to="{ name: 'projects' }">Progetti</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped></style>

