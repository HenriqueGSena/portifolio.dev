<template>
  <div>
    <div class="container border-dark rounded shadow-lg p-3 mb-5 bg-opacity-10 custom-container">
      <h4 class="text-white" v-text="$t('portfolioDevTranslate.contact.title')"></h4>
      <br />
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

      <div class="flex justify-center sm:block">
        <a class="btn btn-success mt-2">
          <span v-text="$t('portfolioDevTranslate.contact.send')"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.custom-container {
  width: 75%;
  margin-top: 52px;
}
</style>
