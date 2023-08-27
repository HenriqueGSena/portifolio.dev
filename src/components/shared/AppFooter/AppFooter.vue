<template>
  <div>
    <footer class="text-center text-white p-lg-4">
      <label>
        <h2 v-text="$t('portfolioDevTranslate.cotacts.titleContact')"></h2>
      </label>
      <div class="container-fluid">
        <section class="mb-4">
          <!-- Github -->
          <a class="btn text-white btn-floating m-2 custom-background rounded-circle"
              href="#!"
              role="button"
          ><i class="bi bi-github custom-icon"></i>
          </a>

          <!-- Twitter -->
          <a class="btn text-white btn-floating m-2 custom-background rounded-circle"
              href="#!"
              role="button"
          ><i class="bi bi-twitter custom-icon"></i>
          </a>

          <!-- Linkedin -->
          <a class="btn text-white btn-floating m-2 custom-background rounded-circle"
              href="#!"
              role="button"
          ><i class="bi bi-linkedin custom-icon"></i>
          </a>

          <!-- Instagram -->
          <a class="btn text-white btn-floating m-2 custom-background rounded-circle"
              href="#!"
              role="button"
          ><i class="bi bi-instagram custom-icon"></i>
          </a>
        </section>
      </div>
    </footer>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.custom-icon {
  font-size: 24px;
}
.custom-background {
  background-color: #27AE60;
}
.rounded-circle {
  border-radius: 60%;
}
</style>
