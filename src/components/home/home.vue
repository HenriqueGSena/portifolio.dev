<template>
  <div>
    <section class="home">
      <div class="max-width">
        <div class="home-content">
          <div class="title" v-text="$t('portfolioDevTranslate.homePage.apresentationName')"></div>
          <div class="subTitle" v-text="$t('portfolioDevTranslate.homePage.titleName')"></div>
          <div class="func-home" v-text="$t('portfolioDevTranslate.homePage.profession')"></div>
          <button type="button" class="btn btn-outline-success"
            v-text="$t('portfolioDevTranslate.homePage.button')"></button>
        </div>
      </div>

      <div class="logo">
          <img src="@/assets/dev.svg" alt="logo" href="devLogo">
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>

<style scoped>
.home {
  display: flex;
  background-color: #242423;
  height: 100vh;
  color: #fff;
  min-height: 500px;
  font-family: 'Poppins', sans-serif;
}

.home .max-width {
  margin: 18% auto auto 13%;
}

.home .home-content .title {
  color: #FFF;
  font-size: 25px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 5px;
}

.home .home-content .subTitle {
  color: #FFF;
  font-size: 52px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 5px;
}

.home .home-content .func-home {
  color: var(--gray-3, #828282);
  font-size: 25px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* margin: 15px; */
}

.logo {
  width: 582px;
  height: 582px;
  flex-shrink: 0;
  position: absolute;
  top: 22%;
  left: 53%;
}
</style>