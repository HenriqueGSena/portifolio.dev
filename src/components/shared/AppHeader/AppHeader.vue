<template>
  <div class="menu">
    <ul class="nav nav-pills justify-content-center pt-5" role="tablist">
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          {{ $t('portfolioDevTranslate.menu.home') }}
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/about" class="nav-link">
          {{ $t('portfolioDevTranslate.menu.aboutMe') }}
        </router-link>
      </li>
      <!--        <li class="nav-item">-->
      <!--          <a class="nav-link"-->
      <!--             href="projects"-->
      <!--             v-text="$t('portfolioDevTranslate.menu.projects')"></a>-->
      <!--        </li>-->
      <li class="nav-item">
        <router-link to="/contact" class="nav-link">
          {{ $t('portfolioDevTranslate.menu.contact') }}
        </router-link>
      </li>
    </ul>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" src="./AppHeader.component.ts"></script>

<style scoped>

/* Fonte Menu*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

.menu {
  width: 100%;
  padding: 2%;
}

a {
  color: white !important;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
