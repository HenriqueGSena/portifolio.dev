<template>
  <div class="container mx-auto">
    <contact-form />
  </div>
</template>

<script lang="ts">
import contactForm from "@/components/contact/contactForm.vue";

export default {
  name: 'Contact',
  components: {
    contactForm
  }
}
</script>

<style scoped>

</style>
