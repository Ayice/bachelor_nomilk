<template>
  <div class="flex w-full">
    <div class="w-3/12">
      <side-bar
        :websites="websites"
        @update:websites="handleNewWebsite"></side-bar>
    </div>

    <div class="w-4/6 m-auto">
      <website-table
        v-if="websites.length"
        :websites="websites"></website-table>
      <p v-else>
        Loading...
      </p>
    </div>
  </div>
</template>

<script>
import { getWebsites } from './utils/api';

import SideBar from './components/SideBar.vue';
import WebsiteTable from './components/WebsiteTable.vue';

export default {
  components: {
    SideBar,
    WebsiteTable
  },
  data() {
    return {
      websites: [],
      // eslint-disable-next-line
      rest_url: wpData.rest_url
    };
  },
  mounted() {
    this.fetchWebsites();
  },
  methods: {
    fetchWebsites() {
      getWebsites(this.rest_url).then(res => this.websites = res);
    },
    handleNewWebsite(website) {
      this.websites.push(website);
    }
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

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
