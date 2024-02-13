<template>
  <div>
    <div class="container border-dark rounded shadow-lg p-3 mb-5 bg-opacity-10 custom-container-details">
      <h4 class="text-white text-center" v-text="$t('portfolioDevTranslate.contact.contactDetails.details')"></h4>
      <br />
      <div class="row mb-3">
        <i class="bi bi-person-circle text-success col-sm-2"></i>
        <div class="col-sm-10">
          <label class="text-white" v-text="$t('portfolioDevTranslate.contact.name')"></label><br>
          <label class="text-success" v-text="$t('portfolioDevTranslate.information.user')"></label>
        </div>
      </div>

      <div class="row mb-3">
        <i class="bi bi-envelope-fill text-success col-sm-2"></i>
        <div class="col-sm-10">
          <label class="text-white" v-text="$t('portfolioDevTranslate.contact.end')"></label><br>
          <label class="text-success" v-text="$t('portfolioDevTranslate.information.address')"></label>
        </div>
      </div>

      <div class="row mb-3">
        <i class="bi bi-telephone-inbound-fill text-success col-sm-2"></i>
        <div class="col-sm-10">
          <label class="text-white" v-text="$t('portfolioDevTranslate.contact.tel')"></label><br>
          <label class="text-success" v-text="$t('portfolioDevTranslate.information.phone')"></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.custom-container-details {
  width: 65%;
  margin-top: 52px;
}

i.bi {
  font-size: 2em;
}
</style>
