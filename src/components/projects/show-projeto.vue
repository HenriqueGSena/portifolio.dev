<template>
  <div>
    <h2 id="page-heading" data-cy="ShowProjetoHeading">
      <span v-text="$t('portfolioDevTranslate.project.title')"></span>
    </h2>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card">
            <img class="card-img-top" src="https://www.placecage.com/150x150">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a card.</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <img class="card-img-top" src="https://www.placecage.com/150x150">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a card.</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <img class="card-img-top" src="https://www.placecage.com/150x150">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a card.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" src="./show-projeto.component.ts"></script>

<style scoped>

</style>