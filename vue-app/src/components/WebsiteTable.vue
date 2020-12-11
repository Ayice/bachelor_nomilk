<template>
  <div class="p-6 max-w-full bg-white rounded-lg flex flex-wrap">
    <table-header
      class="mb-5"
      :search.sync="search">
    </table-header>

    <div
      v-if="websites.length"
      class="w-full">
      <website-table-item
        v-for="website in websites"
        :key="website.ID"
        :website="website">
      </website-table-item>
    </div>

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
  methods: {}
};
</script>

