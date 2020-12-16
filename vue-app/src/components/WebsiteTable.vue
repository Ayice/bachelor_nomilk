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
          v-for="(website, i) in websites"
          :key="website.ID"
          :class="[{'border-t-2': i < websites.length}, {'border-b-2' : i + 1 === websites.length}]"
          :filters="filters"
          :website="website">
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
    <form
      id="newPostForm"
      @submit.prevent="createNewPost">
      <label for="title">Title</label>
      <input
        id="4451"
        v-model="title"
        type="text"
        name="title">

      <label for="">Google analytics api Key</label>
      <input
        id="321"
        v-model="googleAnalyticsApiKey"
        type="text"
        name="fields[google_analytics_api_key]">

      <label for="">Domain</label>
      <input
        id="234"
        v-model="domain"
        type="text"
        name="fields[domain]">

      <label for="">Host Name</label>
      <input
        id="19"
        v-model="host"
        type="text"
        name="fields[sftp_data][name]">

      <label for="">Host</label>
      <input
        id="18"
        v-model="hostname"
        type="text"
        name="fields[sftp_data][host]">

      <label for="">Protocol</label>
      <input
        id="17"
        v-model="protocol"
        type="text"
        name="fields[sftp_data][protocol]">

      <label for="">Port</label>
      <input
        id="16"
        v-model="port"
        type="number"
        name="fields[sftp_data][port]">

      <label for="username">Username</label>
      <input
        id="15"
        v-model="username"
        type="text"
        name="fields[sftp_data][username]">

      <label for="">Password</label>
      <input
        id="14"
        v-model="password"
        type="text"
        name="fields[sftp_data][password]">

      <label for="">Remote Path</label>
      <input
        id="13"
        v-model="remotePath"
        type="text"
        name="fields[sftp_data][remotePath]">

      <label for="">Upload on Save</label>
      <input
        id="12"
        v-model="uploadOnSave"
        type="checkbox"
        name="fields[sftp_data][uploadonsave]">
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { getLightHouseData, postNewWebsite } from '../utils/api';

import Options from './Options.vue';
import WebsiteTableItem from './WebsiteTableItem.vue';

export default {
  components: {
    Options,
    WebsiteTableItem
  },
  data() {
    return {
      // eslint-disable-next-line
      posts: wpData.posts,
      search: '',
      filters: {
        showPerformance: true,
        showSeo: true,
        showWordFence: true,
        showConversionRate: true,
        showUpTime: true
      },
      title: '',
      googleAnalyticsApiKey: '',
      domain: '',
      host: '',
      hostname: '',
      protocol: '',
      port: '',
      username: '',
      password: '',
      remotePath: '',
      uploadOnSave: true
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
          this.$set(website, 'lightHouseData', res);

          const opportunities = [];
          const metrics = [];

          for (const key in website.lightHouseData.lighthouseResult.audits) {
            const element = website.lightHouseData.lighthouseResult.audits[key];

            if (element.details && element.displayValue && element.details.type === 'opportunity') {
              opportunities.push(element);
            }

            if (element.id === 'first-contentful-paint' ||
            element.id === 'cumulative-layout-shift' ||
            element.id === 'interactive' ||
            element.id === 'speed-index' ||
            element.id === 'largest-contentful-paint' ||
            element.id === 'total-blocking-time') {
              metrics.push(element);
            }
          }

          this.$set(website, 'lightHouseOpportunities', opportunities);
          this.$set(website, 'lightHouseMetrics', metrics);
        });
    },
    handleFilterUpdate(data) {
      Object.assign(this.filters, data);
    },
    createNewPost() {
      const postData = {
        title: this.title,
        status: 'publish',
        fields: {
          google_analytics_api_key: this.googleAnalyticsApiKey,
          domain: this.domain,
          sftp_data: {
            name: this.name,
            host: this.host,
            protocol: this.protocol,
            port: this.port,
            username: this.username,
            password: this.password,
            remotePath: this.remotePath,
            upload_on_save: this.uploadOnSave
          }
        }
      };
      postNewWebsite(postData, this.wpData)
        .then(res => {
          console.log(res);

          this.posts.splice(0, 0, res);
        });
    }
  }
};
</script>

