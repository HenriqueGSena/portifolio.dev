<template>
  <div>
    <div class="container mx-auto">
      <AboutMe />
    </div>

    <AboutProgress />
  </div>
</template>

<script lang="ts">
import AboutMe from '@/components/about/aboutMe.vue';
import AboutProgress from '@/components/about/aboutProgress.vue';

export default {
  name: 'About',
  components: {
    AboutMe,
    AboutProgress,
  },
}
</script>

<style scoped></style>
