<template>
  <tr
    class="relative cursor-pointer bg-gray-100 hover:bg-gray-200 font-medium"
    >
    <td class="px-2">
      {{ website.custom_fields.domain }}
    </td>

    <td
      v-if="filters.showPerformance"
      @click="showMore = !showMore"
      class="px-2 relative">
      <div>
      <transition
        name="fade"
        mode="out-in">
        <span
          v-if="website.lightHouseData"
          key="1">
          {{ website.lightHouseData.lighthouseResult.categories.performance.score | prettyScore }}
        </span>

        <span
          v-else
          key="2">
          Loading...
        </span>
      </transition>
      </div>
      <div class="relative top-0 px-2 h-auto" v-if="showMore">
        <ul>
          <li>s</li>
        </ul>
      </div>
    </td>

    <td
      v-if="filters.showSeo"
      class="px-2">
      <transition
        name="fade"
        mode="out-in">
        <span
          v-if="website.lightHouseData"
          key="1">
          {{ website.lightHouseData.lighthouseResult.categories.seo.score | prettyScore }}
        </span>

        <span
          v-else
          key="2">
          Loading...
        </span>
      </transition>
    </td>

    <td
      v-if="filters.showWordFence"
      class="px-2">
      {{ website.custom_fields.google_analytics_api_key }}
    </td>

    <td
      class="px-2 relative"
      @click="copySFTPData">
      <input
        id="sftpData"
        type="hidden"
        name="sftp-Data"
        :value="JSON.stringify(website.custom_fields.sftp_data)">
      <div class="w-full">
        <svg
          class="clipboard"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="50px"
          viewBox="0 -5 35 35"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>

        <transition
          name="slide-up"
          mode="in-out">
          <span
            v-if="copied"
            class="left-0 z-10 shadow absolute font-bold text-green-500 bg-white px-3 py-2">Copied!
          </span>
        </transition>
      </div>
    </td>

    <td
      v-if="filters.showConversionRate"
      class="px-2">
      {{ website.ID }}
    </td>

    <td
      v-if="filters.showUpTime"
      class="relative px-2">
      {{ website.ID }}
    </td>
  </tr>
</template>

<script>
export default {
  filters: {
    prettyScore(val) {
      if (!val) return;

      return val * 100;
    }
  },
  props: {
    website: {
      type: Object,
      required: true
    },
    filters: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showMore: false,
      copied: false
    };
  },
  methods: {
    copySFTPData() {
      const test = document.getElementById('sftpData');

      test.setAttribute('type', 'text');

      test.select();

      document.execCommand('copy');

      test.setAttribute('type', 'hidden');

      window.getSelection().removeAllRanges();

      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 1000);
    }
  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-up-enter-active, .slide-up-leave-active{
  transition: transform .3s;
}
.slide-up-enter, .slide-up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(25px)
}

.clipboard {
  fill: transparent;
}
</style>
