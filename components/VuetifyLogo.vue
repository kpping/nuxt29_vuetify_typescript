<template>
  <v-img class="vuetify-logo" src="/v.png" alt="vuetify logo" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class VuetifyLogo extends Vue {}
</script>

<style lang="scss" scoped>
.vuetify-logo::v-deep .v-image__image {
  background-color: #eee;
}
</style>
