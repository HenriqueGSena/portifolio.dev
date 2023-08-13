<template>
    <div class="menu">
      <ul class="nav nav-pills justify-content-center" role="tablist">
        <li class="nav-item">
          <router-link
              to="/"
              class="nav-link"
              v-text="$t('portfolioDevTranslate.menu.home')"
          ></router-link>
        </li>
        <li class="nav-item">
          <router-link
              to="/about"
              class="nav-link"
              v-text="$t('portfolioDevTranslate.menu.aboutMe')"
          ></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="projects" v-text="$t('portfolioDevTranslate.menu.projects')"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact" v-text="$t('portfolioDevTranslate.menu.contact')"></a>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script lang="ts" src="./AppHeader.vue"></script>

<style scoped>

/* Fonte Menu*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

.menu {
  position: fixed;
  width: 100%;
  padding: 2%;
  font-family: "Poppins", sans-serif;
  z-index: 999;
  transition: all 0.3s ease;
  background: #242423;
}

a {
  color: white !important;
}
</style>
