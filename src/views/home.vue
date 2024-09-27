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
<!--    <div class="flex text-center mt-5">-->
<!--      <router-link to="/projects" aria-label="More Project">-->
<!--        <button type="button"-->
<!--                class="btn btn-success"-->
<!--                title="More Project"-->
<!--                v-text="$t('portfolioDevTranslate.project.moreProject')"-->
<!--        ></button>-->
<!--      </router-link>-->
<!--    </div>-->
    <div class="sendMessage">
      <a class="btn text-white btn-floating m-2 custom-background rounded-circle no-hover position-fixed"
         target="_blank" role="button"
         :href="whatsappLink"
      ><i class="bi bi-whatsapp"></i>
      </a>
    </div>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>

<style scoped>
.container-grid {
  padding-top: 12%;
}

.sendMessage a {
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  box-shadow: 1px 1px 2px #888;
  z-index:1000;
}
</style>
