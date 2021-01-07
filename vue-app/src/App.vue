<template>
  <div class="flex w-full">
    <div class="w-3/12">
      <side-bar></side-bar>
    </div>

    <div class="w-4/6 m-auto">
      <website-table v-if="websites.length"></website-table>
      <p v-else>
        Loading...
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import SideBar from './components/SideBar.vue';
import WebsiteTable from './components/WebsiteTable.vue';

export default {
  components: {
    SideBar,
    WebsiteTable
  },
  data() {
    return {
      // eslint-disable-next-line
      rest_url: wpData.rest_url
    };
  },
  computed: {
    ...mapGetters(['websites'])
  },
  mounted() {
    this.fetchWebsites(this.rest_url);
  },
  methods: {
    ...mapActions(['fetchWebsites'])
  }
};
</script>

<style>
  body {
    background-color:#eff3ef;
    --tw-text-opacity: 1;
    color: rgba(75, 85, 99, var(--tw-text-opacity));
  }

  #masthead {
    display: none;
  }

  body {
    font-family: system-ui, -apple-system, /* Firefox supports this but not yet `system-ui` */ 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji' !important;
  }

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
