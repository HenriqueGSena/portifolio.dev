<template>
  <div>
    <div class="container border-dark rounded shadow-lg p-3 mb-5 bg-opacity-10 custom-container">
      <h4 class="text-white" v-text="$t('portfolioDevTranslate.contact.title')"></h4>
      <form>
        <div class="mb-3">
          <label class="form-label text-white" v-text="$t('portfolioDevTranslate.contact.name')"></label>
          <input type="text" class="form-control" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label class="form-label text-white" v-text="$t('portfolioDevTranslate.contact.email')"></label>
          <input type="email" class="form-control" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label class="form-label text-white" v-text="$t('portfolioDevTranslate.contact.subject')"></label>
          <input type="text" class="form-control" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label class="form-label text-white" v-text="$t('portfolioDevTranslate.contact.message')"></label>
          <textarea class="form-control" rows="3"></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.custom-container {
  width: 35%;
  margin-top: 50px;
}
</style>
