<template>
  <div>
    <div class="w-3/4 m-auto">
      <website-table></website-table>
    </div>
  </div>
</template>

<script>
import { getLightHouseData } from './utils/api';

import WebsiteTable from './components/WebsiteTable.vue';

export default {
  components: {
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
