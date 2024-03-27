<template>
  <div>
    <div class="container" style="margin-top: 52px">
      <div class="row">
        <div class="col-3 mb-4"
             v-for="(repo, index) in repositories"
             :key="repo.id"
             :class="{ 'mr-4': index !== repositories.length - 1 }"
        >
          <div class="card border-0 shadow">
            <div class="card-body text-light bg-dark">
              <h5 class="card-title text-center" style="margin: 0">{{ repo.name }}</h5>
              <a class="bi bi-globe2 mt-4" :href="repo.html_url" target="_blank"></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" src="./ProjectsGrid.component.ts"></script>

<style scoped>
.text-center {
  margin-top: 17%;
}
</style>
