<template>
  <section>
    <div class="text-center text-white">
      <h2 v-text="$t('portfolioDevTranslate.project.title')"></h2>
      <span class="border-bottom border-3 border-success d-block mx-auto" style="width: 10%;"></span>
    </div>
    <div class="container" style="margin-top: 52px">
      <div class="row justify-content-center">
        <div class="col-3" v-for="project in projects" :key="project.id">
          <div class="card" type="button">
            <img class="card-img-top" :src="project.img" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./ProjectsGrid.component.ts"></script>

<style scoped>
.text-center {
  margin-top: 17%;
}
</style>
