<template>
  <div class="container align-content-center">
    <div class="row">
      <div class="col">
        <contact-details />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import contactDetails from "@/components/contact/contactDetails.vue";

export default {
  name: 'Contact',
  components: {
    contactDetails
  }
}
</script>

<style scoped>

</style>
