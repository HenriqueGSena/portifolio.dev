<template>
  <section>
    <div class="container" style="margin-top: 52px">
      <div class="row justify-content-center">
        <div class="col-3" v-for="project in projects" :key="project.id">
          <div class="card">
            <img class="card-img-top mt-lg-2" :src="project.img" alt="ImageProject">
            <div class="card-body">
              <h5 class="card-title text-center" style="margin: 0">{{ project.title }}</h5>
              <p class="card-text text-center">{{ project.category }}</p>
              <a :href="project.url" target="_blank" class="btn btn-primary">Saiba mais</a>
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
