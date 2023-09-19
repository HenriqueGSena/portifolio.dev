<template>
  <div>
    <div class="container mx-auto">
      <AboutMe />
    </div>

    <AboutProgress />

    <div class="container mx-auto">
      <AboutClients />
    </div>
  </div>
</template>

<script lang="ts">
import AboutMe from '@/components/about/aboutMe.vue';
import AboutProgress from '@/components/about/aboutProgress.vue';
import AboutClients from "@/components/about/aboutClients.vue";


export default {
  name: 'About',
  components: {
    AboutMe,
    AboutProgress,
    AboutClients,
  },
}
</script>

<style scoped></style>
