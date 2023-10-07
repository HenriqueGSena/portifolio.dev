<template>
  <div class="d-flex justify-content-center">
    <div class="card text-center mt-5 w-75 shadow p-3 mb-5 bg-transparent rounded">
      <div class="card-header bg-transparent">
        <h2 class="text-white" v-text="$t('portfolioDevTranslate.aboutProgress.aboutTitle')"></h2>
        <span class="border-bottom border-3 border-success d-block mx-auto" style="width: 5%;"></span>
      </div>
      <div class="card-body">
        <div class="row d-flex justify-content-center">
          <div class="col-3">
            <div class="bg-transparent">
              <div class="card-body">
                <h4 class="card-title text-success"
                    v-text="$t('portfolioDevTranslate.aboutProgress.skillsLanguages.frontEnd')"
                ></h4>
                <div class="container mt-5">
                  <div class="row">
                    <div class="col-md-4">
                      <img src="@/assets/insignias/html.svg" />
                    </div>
                    <div class="col-md-4">
                      <img src="@/assets/insignias/Css.svg" />
                    </div>
                    <div class="col-md-4">
                      <img src="@/assets/insignias/javascript.svg" />
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="col-md-4">
                      <img src="@/assets/insignias/VueJs.svg" />
                    </div>
                    <div class="col-md-4">
                      <img src="@/assets/insignias/AngularJs.svg" />
                    </div>
                    <div class="col-md-4">
                      <img src="@/assets/insignias/Typescript.svg" />
                    </div>
                    <div class="col-md-4">
                      <img src="@/assets/insignias/NodeJS.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="bg-transparent">
              <div class="card-body">
                <h4 class="card-title text-success"
                    v-text="$t('portfolioDevTranslate.aboutProgress.skillsLanguages.backEnd')"
                ></h4>
                <div class="container mt-5">
                  <div class="row">
                    <div class="col-md-4">
                      <img src="@/assets/insignias/java.svg" />
                    </div>
                    <div class="col-md-4">
                      <img src="@/assets/insignias/spring.svg" />
                    </div>
                    <div class="col-md-4">
                      <img src="@/assets/insignias/groovy.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="bg-transparent">
              <div class="card-body">
                <h4 class="card-title text-success"
                    v-text="$t('portfolioDevTranslate.aboutProgress.skillsLanguages.dataBase')"
                ></h4>
                <div class="container mt-5">
                  <div class="row">
                    <div class="col-md-4">
                      <img src="@/assets/insignias/oracle.svg" />
                    </div>
                    <div class="col-md-4">
                      <img src="@/assets/insignias/postgresql.svg" />
                    </div>
                    <div class="col-md-4">
                      <img src="@/assets/insignias/mysql.svg" />
                    </div>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-md-4">
                    <img src="@/assets/insignias/Liquibase.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="bg-transparent">
              <div class="card-body">
                <h4 class="card-title text-success"
                    v-text="$t('portfolioDevTranslate.aboutProgress.skillsLanguages.containers')"
                ></h4>
                <div class="container mt-5">
                  <div class="row">
                    <div class="col-md-4">
                      <img src="@/assets/insignias/Docker.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style scoped>
img {
  width: 65px;
}
</style>
