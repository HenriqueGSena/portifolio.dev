<template>
    <nav class="navbar navbar-expand-sm bg-light justify-content-center">
      <div class="navbar-nav">
        <a class="navbar-brand" href="#" v-text="$t('homeMenu.projects')"></a>
        <a class="navbar-brand" href="#" v-text="$t('homeMenu.aboutMe')"></a>
        <a class="navbar-brand" href="#" v-text="$t('homeMenu.contact')"></a>
      </div>
    </nav>
</template>

<script lang="ts">
export default {
    name: "Header",
};
</script>

<style scoped>

* {
  background: rgba( 255, 255, 255, 0 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

</style>