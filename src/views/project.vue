<template>
  <div>
    <div class="container mx-auto">
      <ProjectsGrid />
    </div>
  </div>
</template>

<script lang="ts">
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";
export default {
  name: 'Projects',
  components: {
    ProjectsGrid
  },
}
</script>

<style scoped></style>
