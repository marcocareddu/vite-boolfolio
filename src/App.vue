<script>
import AppHeader from './components/AppHeader.vue'
import ProjectsList from './components/projects/ProjectsList.vue'
export default {
  name: 'Boolfolio',
  components: { AppHeader, ProjectsList }
}

</script>

<template>
  <!-- Header -->
  <AppHeader />
  <RouterView></RouterView>
</template>

<style scoped></style>
