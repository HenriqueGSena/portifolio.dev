<template>
  <div>
    <div class="container" style="margin-top: 52px">
      <div class="row justify-content-center">
        <div class="col-md-5 col-12 mb-4 justify-content-center" v-for="(repo, index) in repositories.slice(0,6)" :key="repo.id"
          :class="{ 'mr-4': index !== repositories.length - 1 }">
          <div class="card rounded-0 border-0 shadow">
            <div class="card-body text-light" style="background-color: #1B1B1B;">
              <h5 class="card-title text-center pb-3" style="margin: 0">{{ repo.name }}</h5>
              <div class="container">
                <div>
                  <div class="col d-flex">
                    <span v-text="$t('portfolioDevTranslate.project.language')"></span>
                    <p style="margin: 0; margin-left: 4%;">{{ repo.language }}</p>
                  </div>
                  <div class="col mt-4">
                    <a :href="repo.html_url" target="_blank">
                      <button type="button" class="btn btn-success"
                        v-text="$t('portfolioDevTranslate.project.acess')"></button>
                    </a>
                  </div>
                </div>
              </div>
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
