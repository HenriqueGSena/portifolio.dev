<template>
  <div class="container mx-auto">
    <contact-form />

    <contact-details />
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
