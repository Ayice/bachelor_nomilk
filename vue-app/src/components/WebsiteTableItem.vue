<template>
  <tr
    v-click-outside="closeExtraData"
    class="relative cursor-pointer bg-gray-100 hover:bg-gray-200 font-medium"
    @click="showMore = true">
    <td class="px-2">
      {{ website.acf.domain }}
    </td>

    <td
      v-if="filters.showPerformance"
      class="px-2 relative">
      <transition
        name="fade"
        mode="out-in">
        <span
          v-if="lightHouseData.id"
          key="1">
          {{ lightHouseData.lighthouseResult.categories.performance.score | prettyScore }}
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
          v-if="lightHouseData.id && showMore"
          class="metrics-div top-0 rounded-md shadow-lg p-8 bg-white absolute left-full z-10">
          <p class="mb-5 text-xl">
            {{ website.acf.domain }}
          </p>

          <div class="relative w-full flex flex-wrap mb-2">
            <div
              v-for="tabName in tabs"
              :key="tabName"
              :style="{ width: 100 / tabs.length + '%'}"
              :class="[{ 'text-blue-500' : tab === tabName }, 'tab', 'text-center', 'p-2', 'font-bold', 'text-gray-700', 'hover:bg-gray-200', 'transition']"
              @click="tab = tabName">
              {{ tabName.toUpperCase() }}
            </div>

            <div class="w-full relative h-1 z-10 bottom-0">
              <span
                :style="{ width: 100 / tabs.length + '%', left: sliderLeft }"
                class="slider block absolute h-0.5 bg-blue-500 rounded-sm">
              </span>
            </div>
          </div>

          <transition
            name="slide-in"
            mode="out-in">
            <div
              v-if="tab === 'metrics'"
              key="metrics">
              <p class="text-lg">
                Metrics
              </p>

              <div
                v-if="lightHouseData.loadingExperience"
                class="mb-3 flex flex-wrap">
                <div
                  v-for="(metric, key) in lightHouseData.loadingExperience.metrics"
                  :key="key"
                  class="w-1/2 mb-3 ">
                  {{ key | prettyMetricTitle }} - {{ metric.percentile | prettyMetricScore }}s
                </div>
              </div>

              <div
                v-else-if="lightHouseData.id && !lightHouseData.loadingExperience"
                class="mb-3">
                <p>
                  The report for user experience in Chrome doesn't have enough data to show.
                </p>
              </div>

              <p class="text-lg">
                Other Metrics
              </p>

              <div>
                <div class="flex flex-wrap">
                  <div
                    v-for="metric in metrics"
                    :key="metric.id"
                    class="w-1/2 mb-3">
                    <p>{{ metric.title }}</p>
                    <p>{{ metric.displayValue }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-else-if="tab === 'opportunities'"
              key="opportunities">
              <p class="text-lg">
                Performance opportunities
              </p>

              <ul
                v-if="showMore"
                class="relative top-0 px-2 h-auto list-disc">
                <li
                  v-for="opportunity in opportunities"
                  :key="opportunity.ID"
                  class="flex justify-between items-start mb-2">
                  <span class="w-1/2">{{ opportunity.title }}</span>
                  <span>{{ opportunity.displayValue }}</span>
                </li>
              </ul>
            </div>

            <div
              v-else-if="tab === 'wordfence'"
              key="wordfence">
              <p class="text-lg">
                Wordfence issues
              </p>

              <ul
                v-if="showMore"
                class="relative top-0 px-2 h-auto list-disc">
                <li
                  v-for="issue in wordfenceData.data.body.issues.new"
                  :key="issue.id + website.domain"
                  class="flex justify-between items-start mb-2">
                  <span class="w-1/2">{{ issue.id }}</span>
                  <span>{{ issue.shortMsg }}</span>
                </li>
              </ul>
            </div>
          </transition>
        </div>

        <div
          v-else-if="showMore && !lightHouseData.id"
          :class="[lightHouseData.id ? loaded : '' , 'metrics-div', 'rounded-md', 'shadow-lg', 'p-8', 'bg-white', 'absolute', 'left-full', 'z-10']">
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
          v-if="lightHouseData.id"
          key="1">
          {{ lightHouseData.lighthouseResult.categories.seo.score | prettyScore }}
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
      {{ wordfenceData.data ? wordfenceData.data.body.issueCounts.new : 'loading...' }}
    </td>

    <td
      class="px-2 relative"
      @click.stop="copySFTPData">
      <input
        id="sftpData"
        type="hidden"
        name="sftp-Data"
        :value="JSON.stringify(website.acf.sftp_data)">
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
      {{ website.id }}
    </td>

    <td
      v-if="filters.showUpTime"
      class="relative px-2">
    </td>

    <td
      class="relative px-2">
      <span class="flex justify-center">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </span>
    </td>

    <div>
      <span 
        class="absolute p-2"
        @click.stop="handleRemoveWebsite">
        <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </span>
    </div>
  </tr>
</template>

<script>
import { getLightHouseData } from '../utils/api';
import { mapActions } from 'vuex';

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
    },
    wordfenceData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // eslint-disable-next-line
      wpData: wpData,
      showMore: false,
      copied: false,
      lightHouseData: {},
      opportunities: [],
      metrics: [],
      loadingExperience: {},
      tabs: ['metrics', 'opportunities', 'wordfence'],
      tab: 'metrics'
    };
  },
  computed: {
    sliderLeft() {
      const numberOfTabsWidth = 100 / this.tabs.length;

      const id = this.tabs.findIndex(tab => tab === this.tab);

      return id * numberOfTabsWidth + '%';
    }
  },
  mounted() {
    this.fetchLHData();
  },
  methods: {
    ...mapActions(['removeWebsite']),
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
    fetchLHData() {
      getLightHouseData(this.website.acf.domain)
        .then(res => {
          this.lightHouseData = res;

          for (const key in this.lightHouseData.lighthouseResult.audits) {
            const element = this.lightHouseData.lighthouseResult.audits[key];

            if (element.details && element.displayValue && element.details.type === 'opportunity') {
              this.opportunities.push(element);
            }

            if (element.id === 'first-contentful-paint' ||
            element.id === 'cumulative-layout-shift' ||
            element.id === 'interactive' ||
            element.id === 'speed-index' ||
            element.id === 'largest-contentful-paint' ||
            element.id === 'total-blocking-time') {
              this.metrics.push(element);
            }
          }
        });
    },
    closeExtraData() {
      this.showMore = false;
    },
    handleRemoveWebsite() {
      const data = {
        wpData: this.wpData,
        website: this.website
      };

      if (confirm('Are you sure you want to delete this domain?')) {
        this.removeWebsite(data);
      }
    }
  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active, .slide-up-leave-active{
  transition: all .5s cubic-bezier(.57,-0.52,.32,1.41);
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

.slide-in-enter-active, .slide-in-leave-active{
  transition: all .5s ease-in;
}

.slide-in-enter {
  transform: translateX(-100px);
  opacity: 0;
}

.slide-in-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: opacity .5s;
}
.slide-down-enter, .slide-down-leave-to {
  opacity: 0;
}

.slider {
  transition: .3s all ease-in;
}

.clipboard {
  fill: transparent;
}

.metrics-div {
  width: 600px;
  overflow-x: hidden;
  overflow-y: auto;
}

button:focus {
  outline: none;
}
</style>
