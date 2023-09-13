<template>
  <div class="d-flex justify-content-center">
    <div class="card text-center mt-5 w-75 shadow p-3 mb-5 bg-transparent rounded">
      <div class="card-header bg-transparent">
        <h2 class="text-success"
            v-text="$t('portfolioDevTranslate.aboutProgress.aboutTitle')"
        ></h2>
      </div>
      <div class="card-body">
        <div class="row d-flex justify-content-center">
          <div class="col-3">
            <div class="bg-transparent">
              <div class="card-body">
                <h4 class="card-title text-success"
                    v-text="$t('portfolioDevTranslate.aboutProgress.skillsLanguages.frontEnd')"
                ></h4>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="bg-transparent">
              <div class="card-body">
                <h4 class="card-title text-success"
                    v-text="$t('portfolioDevTranslate.aboutProgress.skillsLanguages.backEnd')"
                ></h4>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="bg-transparent">
              <div class="card-body">
                <h4 class="card-title text-success"
                    v-text="$t('portfolioDevTranslate.aboutProgress.skillsLanguages.dataBase')"
                ></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style scoped>
</style>
