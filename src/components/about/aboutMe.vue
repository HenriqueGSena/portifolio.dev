<template>
  <div class="container text-center mt-lg-5">
    <div class="row">
      <div class="col-md-6 pt-4">
        <div>
          <img class="rounded custom-image" src="@/assets/perfil.png" />
        </div>
      </div>
      <div class="col-md-6 d-flex mt-3">
        <div class="text-white text-sm-start" style="align-content: center">
          <p v-for="bio in bios" :key="bio.id">
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
          bio: 'Me chamo Henrique Desenvolvedor de Software graduado com formação em Sistemas da Informação pela Universidade Veiga de Almeida(UVA) contendo Pós-Graduação em Engenharia de Software pela (Puc Minas).\n\n Desenvolvedor Full-Stack, focado no desenvolvimento de aplicações web, experiência do usuário com as melhores práticas utilizadas no mercado, profissional alinhado à metodologia ágil, desenvolvimento e integrações entre sistemas.',
        },
        {
          id: 2,
          bio: 'Sólida experiência em planejamento e desenvolvimento do front-end da aplicação (LeadCred), alteração de layout com estilizações utilizando tailwind css, criação de dashboard para painel principal, utilizando Vue.Js/Javascript, integração com backend para envio e recebimento de dados feitos em laravel/php, gerenciamento de banco de dados realizando querys para consultas e tratamento de serviços feitos em MySQL, importações de dados, correções de bugs na aplicação, treinamento de novos estagiários dentro do Sistema Log-Ai, participação em projeto Billing, no faturamento de pagamentos dos serviços contratados de clientes e empresas.',
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
