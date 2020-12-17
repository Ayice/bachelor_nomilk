<template>
  <tr
    v-click-outside="closeExtraData"
    class="relative cursor-pointer bg-gray-100 hover:bg-gray-200 font-medium"
    @click="showMore = true">
    <td class="px-2">
      {{ website.custom_fields.domain }}
    </td>

    <td
      v-if="filters.showPerformance"
      class="px-2 relative">
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

      <transition
        name="slide-up"
        mode="in-out">
        <div
          v-if="website.lightHouseData && showMore"
          class="metrics-div rounded-md shadow-lg p-8 bg-white absolute left-full z-10">
          <p class="mb-5 text-xl">
            {{ website.custom_fields.domain }}
          </p>

          <p class="text-lg">
            Metrics
          </p>

          <div class="flex flex-wrap">
            <div
              v-for="(metric, key) in website.lightHouseData.loadingExperience.metrics"
              :key="key"
              class="w-1/2 mb-3 ">
              {{ key | prettyMetricTitle }} - {{ metric.percentile | prettyMetricScore }}s
            </div>
          </div>

          <p class="text-lg">
            Other Metrics
          </p>

          <div>
            <div class="flex flex-wrap">
              <div
                v-for="metric in website.lightHouseMetrics"
                :key="metric.id"
                class="w-1/2 mb-3">
                <p>{{ metric.title }}</p>
                <span>{{ metric.displayValue }}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          v-else-if="showMore && !website.lightHouseData"
          class="metrics-div rounded-md shadow-lg p-8 bg-white absolute left-full z-10">
          <p class="text-lg">
            Still Loading this data
          </p>
        </div>
      </transition>
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
      @click.stop="copySFTPData">
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
            class="left-0 z-10 shadow absolute font-bold text-green-500 bg-white px-3 py-2">
            Copied!
          </span>
        </transition>
      </div>
    </td>

    <td
      v-if="filters.showConversionRate"
      class="px-2 relative">
      {{ website.ID }}
    </td>

    <td
      v-if="filters.showUpTime"
      class="relative px-2">
      {{ website.ID }}
    </td>

    <div class="accordion absolute w-1/2 ">
    </div>
  </tr>
</template>

<script>
export default {
  filters: {
    prettyScore(val) {
      if (!val) return;

      return Math.round(val * 100);
    },
    prettyMetricScore(val) {
      if (!val) return;

      if (val.toString().length === 4) {
        const stringVal = val.toString();

        const valRemoveLastChar = stringVal.slice(0, -1);

        return parseInt(valRemoveLastChar) / 100;
      }

      return val / 100;
    },
    prettyMetricTitle(val) {
      if (!val) return;

      const valArray = val.split('_');

      const removeUnderScore = valArray.join(' ');

      const lowerCaseVal = removeUnderScore.toLowerCase();

      const firstCharacter = lowerCaseVal.charAt(0);

      return firstCharacter.toUpperCase() + lowerCaseVal.slice(1);
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
      const sftpData = document.getElementById('sftpData');

      sftpData.setAttribute('type', 'text');

      sftpData.select();

      document.execCommand('copy');

      sftpData.setAttribute('type', 'hidden');

      window.getSelection().removeAllRanges();

      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },
    closeExtraData() {
      this.showMore = false;
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
  transition: all .5s cubic-bezier(.57,-0.52,.32,1.41);
}
.slide-up-enter /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(100px);
  opacity: 0;
}

.slide-up-leave-to {
 transform: translateY(100px);
 opacity: 0;
}

.clipboard {
  fill: transparent;
}

.metrics-div{
  width: 300%;
  top: 0;

}
</style>
