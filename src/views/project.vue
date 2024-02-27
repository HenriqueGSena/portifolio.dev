<template>
  <div>
    <div class="container mx-auto">
      <ProjectSingle />
    </div>

    <ProjectsGrid />
  </div>
</template>

<script lang="ts">
import ProjectSingle from "@/components/projects/ProjectSingle.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";
export default {
  name: 'Projects',
  components: {
    ProjectSingle,
    ProjectsGrid
  },
}
</script>

<style scoped></style>
