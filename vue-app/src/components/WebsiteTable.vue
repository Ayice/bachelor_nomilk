<template>
  <div class="p-6 flex flex-wrap">
    <options
      class="mb-5"
      :search.sync="search"
      :filters.sync="filters">
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

          <th
          v-if="filters.details"
            class="px-2 justify-center">
            Details
          </th>
        </tr>

        <website-table-item
          v-for="(website, i) in computedWebsites"
          :key="website.id"
          :class="[{'border-t-2': i < websites.length}, {'border-b-2' : i + 1 === websites.length}]"
          :filters="filters"
          :website="website"
          :wordfence-data="wordfenceData"
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
    <div
      class="mt-3 flex align-items-center justify-center border border-2 border-gray-500 shadow-lg rounded-full aboslute bottom-0 left-0 w-10 h-10 hover:bg-gray-300 transition cursor-pointer"
      @click="showCreateWebsiteForm(true)"
      @mouseover="showTooltip = true"
      @mouseleave="showTooltip = false">
      <span
        class="w-full h-full justify-center flex align-items-center relative  pointer-events-none">
        +

        <transition
          name="slide-up"
          mode="out-in">
          <div
            v-if="showTooltip"
            class="tooltip w-48 absolute top-full left-0 h-full bg-transparent flex align-items-center justify-center text-gray font-bold px-2 rounded-sm">
            Create new website
          </div>
        </transition>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import Options from './Options.vue';
import WebsiteTableItem from './WebsiteTableItem.vue';

export default {
  components: {
    Options,
    WebsiteTableItem
  },
  data() {
    return {
      showTooltip: false,
      wpData: wpData,
      search: '',
      filters: {
        showPerformance: true,
        showSeo: true,
        showWordFence: true,
        showConversionRate: true,
        showUpTime: true,
        details: true
      },
      wordfenceData: {}
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
  mounted() {
    const form2 = new FormData();

    form2.append('action', 'get_wordfence_nonce');

    axios.post('http://anderskjaerp.dk/reberbans-blomster/wp-admin/admin-ajax.php', form2)
      .then(res => {
        console.log(res.data.data.nonce);

        const form = new FormData();

        form.append('nonce', res.data.data.nonce);

        form.append('action', 'get_wordfence_data');

        axios.post('http://anderskjaerp.dk/reberbans-blomster/wp-admin/admin-ajax.php', form)
          .then(result => this.wordfenceData = result.data);
      });
  },
  methods: {
    ...mapActions(['setFocusedWebsite', 'showCreateWebsiteForm']),
    focusWebsite(website) {
      this.setFocusedWebsite(website);
    }
  }
};
</script>
