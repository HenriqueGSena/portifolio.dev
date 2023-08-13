<template>
  <div class="home-page">
    <div class="container">
      <div class="row">
        <div class="col-6" style="margin-top: 40%; margin-bottom: auto">
          <div class="page-title">
            <div class="text-1">
              <span v-text="$t('portfolioDevTranslate.homePage.apresentationName')"></span>
            </div>
            <div class="text-2">
              <span v-text="$t('portfolioDevTranslate.homePage.titleName')"></span>
            </div>
            <div class="text-3">
              <span v-text="$t('portfolioDevTranslate.homePage.profession')"></span>
            </div>
            <div>
              <button type="button" class="btn btn-outline-success" style="margin-top: 18px">
                <span v-text="$t('portfolioDevTranslate.homePage.button')"></span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-6">
          <img src="@/assets/dev.svg" class="img-fluid" alt="DevLog">
        </div>
      </div>
      <ProjectsGrid style="text-align: center" />
    </div>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>

<style scoped>
.home-page {
  color: #ffffff;
  background-color: #242423;
  height: auto;
}

.img-fluid {
  margin-top: 7vh;
  height: 90vh;
}

.page-title {
  font-family: 'Poppins', sans-serif;
}

.text-1 {
  font-size: 27px;
}

.text-2 {
  color: #FFF;
  font-family: DM Sans;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.text-3 {
  color: var(--gray-3, #828282);
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  width: 215.043px;
  margin-top: 13px
}
</style>
