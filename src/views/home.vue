<template>
  <div class="container mx-auto">
    <AppBanner class="mb-5 sm:mb-8" />
  </div>
</template>

<script lang="ts">
import AppBanner from "@/components/shared/AppBanner/AppBanner.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";
export default {
  name: 'Home',
  components: {
    AppBanner,
    ProjectsGrid
  },
}
</script>

<style scoped></style>
