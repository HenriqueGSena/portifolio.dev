<template>
  <div class="container text-center mt-lg-5">
    <div class="row">
      <div class="col-sm-5">
        <div class="d-grid gap-3 p-lg-5 w-25" style="margin-left: 25%">
          <img class="rounded custom-image"
               src="@/assets/perfil.png"
          />
        </div>
      </div>
      <div class="col-6 mt-2">
        <div class="text-white text-sm-start mt-5">
          <p v-for="bio in bios"
             :key="bio.id"
          >
            {{ bio.bio }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: 'Desenvolvedor fullstack há 2 anos já atuante e alguns projetos de impacto no mercado, com reconhecimento em\n' +
              'performance, entrega de soluções de projetos.',
        },
        {
          id: 2,
          bio: '"Meu inicio na carreira de desenvolvimento se deu quando descobri o poder em criar soluções através\n' +
              'de códigos e vê o resultado imediato."',
        },
        {
          id: 3,
          bio: 'Um dos meus primeiros trabalhos se deu na realização de freelancer montando um site onde o foco era a\n' +
              'venda de produtos naturais pra saúde, proporcionando soluções estratégicas na entrega dos resultados\n' +
              'recebendo um excelente feedback.',
        }
      ],
    };
  },
};
</script>

<style scoped>
.custom-image {
  width: 300px;
  height: 290px;
}
</style>
