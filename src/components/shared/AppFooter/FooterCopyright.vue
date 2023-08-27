<template>
  <div class="flex justify-content-center text-center text-white custom-footerCop">
    <div class="text-white">
      &copy; {{ copyrightDate }}.
      <a class="text-success">
        <span v-text="$t('portfolioDevTranslate.footer.authorization')"></span>
      </a>
      . Developed by
      <a>
        <span v-text="$t('portfolioDevTranslate.footer.author')"></span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => {
    return {
      copyrightDate: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.custom-footerCop {
  height: 100%;
  padding-bottom: 4%;
}
</style>
