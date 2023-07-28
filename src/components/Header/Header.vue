<template>
    <div class="menu">
      <ul class="nav justify-content-center">
        <div class="logo">
          <li class="nav-item">
            <!-- <a>
              <img src="@/assets/logo.png" alt="logo" href="home">
            </a> -->
          </li>
        </div>
        <li class="nav-item">
          <a class="nav-link" href="about" style="color: #27AE60;" v-text="$t('portfolioDevTranslate.menu.aboutMe')"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="projects" style="color: #27AE60;" v-text="$t('portfolioDevTranslate.menu.projects')"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact" style="color: #27AE60;" v-text="$t('portfolioDevTranslate.menu.contact')"></a>
        </li>
      </ul>
    </div>
</template>

<script lang="ts" src="./Header.component.ts"></script>

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

.logo {
  width: 15%;
}

</style>