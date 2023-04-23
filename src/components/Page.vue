<template>
    <h1>
        Ola Mundo
    </h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: "Page"
})
export default class Page extends Vue { }
</script>

<style scoped>
*{
    background: rebeccapurple;
}
</style>