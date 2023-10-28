<template>
  <section>
    <div
        class="container" style="margin-top: 52px"
    >
      <div
          class="row justify-content-center"
      >
        <div
            class="col-3" v-for="project in projects" :key="project.id"
        >
          <div class="card border-0 shadow">
            <img class="img-thumbnail"
                 :src="project.img"
                 alt="ImageProject"
            >
            <div class="card-body text-light bg-dark">
              <h5 class="card-title text-center"
                  style="margin: 0"
              >
                {{ project.title }}
              </h5>
              <p class="card-text text-center mt-3" style="margin: 0">{{ project.category }}</p>
              <a :href="project.url" target="_blank" class="btn btn-success mt-4">Saiba mais</a>
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
