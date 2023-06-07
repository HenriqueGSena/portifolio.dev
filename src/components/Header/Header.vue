<template>
    <div class="menu">
      <ul class="nav justify-content-center">
        <div class="logo">
          <li class="nav-item">
            <a>
              <img src="@/assets/logo.png" alt="logo" href="home">
            </a>
          </li>
        </div>
        <li class="nav-item">
          <a class="nav-link" href="projects" v-text="$t('homeMenu.projects')"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about" v-text="$t('homeMenu.aboutMe')"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact" v-text="$t('homeMenu.contact')"></a>
        </li>
      </ul>
    </div>
</template>

<script lang="ts" src="./Header.component.ts"></script>

<style scoped>

.menu {
  position: fixed;
  width: 100%;
  padding: 13px;
  font-family: "Poppins", sans-serif;
  z-index: 999;
  transition: all 0.3s ease;
  background: #1b1b1b;
}

.logo {
  width: 25%;
}

</style>