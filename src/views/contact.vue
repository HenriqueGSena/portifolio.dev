<template>
  <div class="container align-content-center">
    <div class="row">
      <div class="col">
        <contact-form />
      </div>

      <div class="col">
        <contact-details />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import contactForm from "@/components/contact/contactForm.vue";
import contactDetails from "@/components/contact/contactDetails.vue";

export default {
  name: 'Contact',
  components: {
    contactForm,
    contactDetails
  }
}
</script>

<style scoped>

</style>
