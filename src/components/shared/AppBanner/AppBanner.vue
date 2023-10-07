<template>
  <div class="row d-flex justify-content-center">
    <div class="col-md-6" id="col">
      <h1 class="name"
          id="nameTitle"
          v-text="$t('portfolioDevTranslate.homePage.titleName')"
      ></h1>
      <span class="stack"
            id="subName"
            v-text="$t('portfolioDevTranslate.homePage.profession')"
      ></span>
      <div class="flex justify-center sm:block">
        <a class="btn btn-success mt-2" @click="downloadDocument"
           download="curriculo-sena.pdf"
        >
          <span v-text="$t('portfolioDevTranslate.homePage.button')"></span>
        </a>
      </div>
    </div>

    <div class="col-md-6">
      <img class="w-75 mt-lg-5" src="@/assets/dev.svg"
           alt="Developer"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./AppBanner.component.ts"></script>

<style scoped>
#col {
  padding-left: 13%;
}

#nameTitle {
  margin-top: 53%;
  width: 364px;
}

.name {
  color: #FFF;
  font-family: DM Sans;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

#subName {
  width: 356px;
}

.stack {
  color: var(--gray-3, #828282);
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
