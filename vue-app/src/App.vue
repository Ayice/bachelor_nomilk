<template>
  <div class="mt-5">
    <p v-for="site in test">{{site.id}}</p>
  </div>
</template>

<script>
  import { getLightHouseData } from './utils/api';

  export default {
    data() {
      return {
        test: [],
        wpData: wpData
      }
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
            console.log(res);

            this.test.push(res)
          })
      }
    }
  }
</script>

<style>
  h1 {
    color: red;
  }

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
