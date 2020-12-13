<template>
  <div class="shadow p-6 max-w-full bg-white rounded-lg flex flex-wrap">
    <table-header
      class="mb-5"
      :search.sync="search">
    </table-header>

    <table
      v-if="websites.length"
      class="w-full text-sm">
      <tr class="text-left bg-gray-100 px-2">
        <th class="px-2">
          Domain
        </th>

        <th class="px-2">
          Performance
        </th>

        <th class="px-2">
          SEO
        </th>

        <th class="px-2">
          WordFence
        </th>

        <th class="px-2">
          Sftp Data
        </th>

        <th class="px-2">
          Conversion Rate
        </th>

        <th class="px-2">
          Uptime
        </th>
      </tr>

      <website-table-item
        v-for="(website, i) in websites"
        :key="website.ID"
        :class="[{'border-t-2': i < websites.length}, {'border-b-2' : i + 1 === websites.length}]"
        :website="website">
      </website-table-item>
    </table>

    <div
      v-else
      class="w-full">
      <p
        v-if="!search"
        class="text-2xl">
        There are no websites...
      </p>

      <p
        v-else
        class="text-2xl">
        No domains match the search word
      </p>
    </div>
  </div>
</template>

<script>
import { getLightHouseData } from '../utils/api';

import TableHeader from './TableHeader.vue';
import WebsiteTableItem from './WebsiteTableItem.vue';

export default {
  components: {
    TableHeader,
    WebsiteTableItem
  },
  data() {
    return {
      // eslint-disable-next-line
      posts: wpData.posts,
      search: ''
    };
  },
  computed: {
    websites() {
      if (this.search) {
        return this.posts.filter(post => post.custom_fields.domain.includes(this.search));
      } else {
        return this.posts;
      }
    }
  },
  mounted() {
    this.posts.forEach(website => {
      this.fetchLHData(website);
    });
  },
  methods: {
    fetchLHData(website) {
      getLightHouseData(website.custom_fields.domain)
        .then(res => {
          this.$set(website, 'lightHouseData',res);
        });
    }
  }
};
</script>

