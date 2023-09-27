<template>
  <div>
    <div class="container mx-auto">
      <ProjectSingle />
    </div>
  </div>
</template>

<script lang="ts">
import ProjectSingle from '@/components/projects/ProjectSingle.vue';

export default {
  name: 'Projects',
  components: {
    ProjectSingle,
  },
}
</script>

<style scoped></style>
