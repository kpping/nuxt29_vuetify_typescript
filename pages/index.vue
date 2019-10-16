<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 class="pb-5">
      <h1 class="underline headline greeting-text">Hello, {{ ipAddress }}</h1>
    </v-flex>
    <v-flex xs12 class="pb-5">
      <NormalLogo class="d-inline-block" />
      <VuetifyLogo class="d-inline-block" />
    </v-flex>
    <v-flex xs12 class="pb-5">
      <v-btn class="get-ip-address-button" @click="getIpAddress">Get IP Address</v-btn>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { IP_ADDRESS_NS } from '~/store/ip_address/const';

@Component({
  components: {
    NormalLogo: () => import('~/components/NormalLogo.vue'),
    VuetifyLogo: () => import('~/components/VuetifyLogo.vue'),
  },
})
export default class IndexPage extends Vue {
  @IP_ADDRESS_NS.Getter('myIpAddress')
  private ipAddress!: string;

  @IP_ADDRESS_NS.Action('getIpAddress')
  private getIpAddress!: () => void;
}
</script>

<style scoped></style>
