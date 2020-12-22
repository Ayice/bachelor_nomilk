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

    <button @click="oauthSignIn">
      Test
    </button>
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
      authToken: '',
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
  mounted() {
    const params = (new URL(document.location)).searchParams;

    const code = params.get('code');

    if (!code && !sessionStorage.oauthSignIn) {
      this.oauthSignIn();
    } else if (code) {
      window.sessionStorage.setItem('oathSignIn', code);

      this.authToken = code;
    } else {
      this.authToken = window.sessionStorage.getItem('oathSignIn', code);
    }
  },
  methods: {
    ...mapActions(['setFocusedWebsite']),
    handleFilterUpdate(data) {
      Object.assign(this.filters, data);
    },
    focusWebsite(website) {
      this.setFocusedWebsite(website);
    },
    oauthSignIn() {
      // Google's OAuth 2.0 endpoint for requesting an access token
      var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

      // Create <form> element to submit parameters to OAuth 2.0 endpoint.
      var form = document.createElement('form');
      form.setAttribute('method', 'GET'); // Send as a GET request.
      form.setAttribute('action', oauth2Endpoint);

      // Parameters to pass to OAuth 2.0 endpoint.
      var params = { 'client_id': '400359028862-c92ejasmsgc758c4qkgv3c085vknvni9.apps.googleusercontent.com',
        'redirect_uri': 'https://nomilkcustomeroverview.com',
        'response_type': 'token',
        'scope': 'https://www.googleapis.com/auth/analytics.readonly',
        'include_granted_scopes': 'true',
        'state': 'pass-through value' };

      // Add form parameters as hidden input values.
      for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
      }

      // Add form to page and submit it to open the OAuth 2.0 endpoint.
      document.body.appendChild(form);
      form.submit();
    }
  }
};
</script>

