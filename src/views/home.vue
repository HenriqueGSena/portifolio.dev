<template>
  <div class="container mx-auto">
    <!--Banner-->
    <AppBanner class="mb-5 sm:mb-8" />

    <!--Project-->
    <div class="container-grid">
      <div class="text-center text-white">
        <h2 v-text="$t('portfolioDevTranslate.project.title')"></h2>
        <span class="border-bottom border-3 border-success d-block mx-auto" style="width: 10%;"></span>
      </div>
      <ProjectsGrid />
    </div>

    <div class="flex text-center mt-5">
      <router-link to="/projects" aria-label="More Project">
        <button type="button"
                class="btn btn-success"
                title="More Project"
                v-text="$t('portfolioDevTranslate.project.moreProject')"
        ></button>
      </router-link>
    </div>
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

<style scoped>
.container-grid {
  padding-top: 12%;
}
</style>
