<template>
  <Page />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import "./styles/global.css"
import Page from './components/Page.vue';

@Options({
  components: {
    Page,
  },
})
export default class App extends Vue {}
</script>