<template>
  <section>
    <div class="text-center text-white">
      <h2 v-text="$t('portfolioDevTranslate.project.title')"></h2>
    </div>
    <div class="container" style="margin-top: 52px">
      <div class="row justify-content-center">
        <div class="col-3">
          <div class="card" type="button">
            <img class="card-img-top" src="@/assets/error.svg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">card's content.</p>
            </div>
          </div>
        </div>

        <div class="col-3">
          <div class="card" type="button">
            <img class="card-img-top" src="@/assets/error.svg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">card's content.</p>
            </div>
          </div>
        </div>

        <div class="col-3">
          <div class="card" type="button">
            <img class="card-img-top" src="@/assets/error.svg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">card's content.</p>
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
