<template>
  <div class="p-6 flex flex-wrap">
    <options
      class="mb-5"
      :search.sync="search"
      :filters="filters"
      @update:filters="handleFilterUpdate">
    </options>

    <div class="shadow w-full bg-white rounded-lg flex flex-wrap">
      <table
        v-if="websites.length"
        class="w-full text-sm">
        <tr class="text-left bg-gray-100 px-2">
          <th class="px-2">
            Domain
          </th>

          <th
            v-if="filters.showPerformance"
            class="px-2">
            Performance
          </th>

          <th
            v-if="filters.showSeo"
            class="px-2">
            SEO
          </th>

          <th
            v-if="filters.showWordFence"
            class="px-2">
            WordFence
          </th>

          <th class="px-2">
            Sftp Data
          </th>

          <th
            v-if="filters.showConversionRate"
            class="px-2">
            Conversion Rate
          </th>

          <th
            v-if="filters.showUpTime"
            class="px-2">
            Uptime
          </th>
        </tr>

        <website-table-item
          v-for="(website, i) in computedWebsites"
          :key="website.id"
          :class="[{'border-t-2': i < websites.length}, {'border-b-2' : i + 1 === websites.length}]"
          :filters="filters"
          :website="website"
          @click.native="focusWebsite(website)">
        </website-table-item>
      </table>

      <div
        v-else
        class="p-10 w-full">
        <p
          v-if="!search"
          class="text-2xl">
          There are no websites...
        </p>

        <p
          v-else
          class="text-2xl">
          No domains match the search word.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Options from './Options.vue';
import WebsiteTableItem from './WebsiteTableItem.vue';

export default {
  components: {
    Options,
    WebsiteTableItem
  },
  data() {
    return {
      search: '',
      filters: {
        showPerformance: true,
        showSeo: true,
        showWordFence: true,
        showConversionRate: true,
        showUpTime: true
      }
    };
  },
  computed: {
    ...mapGetters(['websites']),
    computedWebsites() {
      if (this.search) {
        return this.websites.filter(post => {
          if (post.acf) {
            return post.acf.domain.includes(this.search);
          }

          post.acf.domain.include(this.search);
        });
      } else {
        return this.websites;
      }
    }
  },
  methods: {
    ...mapActions(['setFocusedWebsite']),
    handleFilterUpdate(data) {
      Object.assign(this.filters, data);
    },
    focusWebsite(website) {
      console.log(website);

      this.setFocusedWebsite(website);
    }
  }
};
</script>

