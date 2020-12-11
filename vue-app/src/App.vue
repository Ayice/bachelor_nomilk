<template>
  <div class="">
    <side-bar></side-bar>
    <p
      v-for="site in posts"
      :key="site.id"
      class="test">
      {{ site.id }}
    </p>
  <div>
    <div class="w-3/4 m-auto">
      <website-table></website-table>
    </div>
  </div>
</template>

<script>
import { getLightHouseData } from './utils/api';
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
      wpData: wpData,
      posts: []
    };
  },
  mounted() {
    this.wpData.posts.forEach(website => {
      this.fetchLHData(website.custom_fields.domain);
    });
  },
  methods: {
    fetchLHData(website) {
      getLightHouseData(website)
        .then(res => {
          this.posts.push(res);
        });
    }
  }
};
</script>

<style>
  body {
    background-color:#eff3ef
  }

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
