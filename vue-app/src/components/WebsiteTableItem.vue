<template>
  <tr
    v-click-outside="closeExtraData"
    class="relative cursor-pointer bg-gray-100 hover:bg-gray-200 font-medium">
    <td class="px-2">
      {{ website.title.rendered }}
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
              @click.stop="tab = tabName">
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
                    class="flex justify-between w-full mb-3 border-b-2 border-b-gray">
                    <p class="w-1/2">
                      {{ metric.title }}
                    </p>
                    <p class="w-1/6">
                      {{ metric.displayValue }}
                    </p>
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

              <div>
                <div class="flex flex-wrap">
                  <div
                    v-for="opportunity in opportunities"
                    :key="opportunity.ID"
                    class="flex justify-between w-full mb-3 border-b-2 border-b-gray">
                    <p class="w-1/2">
                      {{ opportunity.title }}
                    </p>
                    <p class="w-2/5">
                      {{ opportunity.displayValue }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-else-if="tab === 'wordfence' && !wordfenceData.errorMsg"
              key="wordfence">
              <p class="text-lg">
                Wordfence issues
              </p>

              <div>
                <div class="flex flex-wrap">
                  <div>
                  </div>
                  <div
                    v-for="issue in wordfenceData.data.body.issues.new"
                    :key="issue.id + website.domain"
                    class="flex justify-between w-full mb-3 border-b-2 border-b-gray">
                    <p class="w-1/12">
                      {{ issue.id }}
                    </p>
                    <p class="w-9/12">
                      {{ issue.shortMsg }}
                    </p>
                  </div>
                </div>
              </div>
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
      v-if="filters.showWordFence && !wordfenceData.errorMsg"
      class="px-2">
      {{ wordfenceData.data && !wordfenceData.errorMsg ? wordfenceData.data.body.issueCounts.new : 'loading...' }}
    </td>

    <td
      v-else-if="filters.showWordFence && wordfenceData.errorMsg"
      class="px-2">
      {{ wordfenceData.errorMsg }}
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
      v-if="filters.showConversionRate && website.acf.google_analytics_view_id"
      class="px-2 relative">
      {{ conversionRate ? conversionRate : 'Loading' }}
    </td>

    <td
      v-else-if="filters.showConversionRate && !website.acf.google_analytics_view_id"
      class="px-2 relative">
      N/A
    </td>

    <td
      v-if="filters.showUpTime && website.acf.google_analytics_view_id"
      class="px-2 relative">
      {{ users ? users : 'Loading' }}
    </td>

    <td
      v-else-if="filters.showUpTime && !website.acf.google_analytics_view_id"
      class="px-2 relative">
      N/A
    </td>

    <td
      class="relative px-2"
      @click.stop="showMore = true">
      <span class="flex justify-center">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"></path></svg>
      </span>
    </td>

    <div>
      <span
        class="absolute p-2"
        @click.stop="handleRemoveWebsite">
        <svg
          class="w-6 h-6 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </span>
    </div>
  </tr>
</template>

<script>
import { getLightHouseData } from '../utils/api';
import { mapActions } from 'vuex';
import axios from 'axios';

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
      // eslint-disable-next-line
      wpData: wpData,
      conversionRate: '',
      users: '',
      showMore: false,
      copied: false,
      lightHouseData: {},
      opportunities: [],
      metrics: [],
      wordfenceData: {},
      loadingExperience: {},
      tabs: ['metrics', 'opportunities'],
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
    this.getWordFenceData();

    if (this.wordfenceData.success) {
      this.tabs.push('wordfence');
    }

    if (this.website.acf.google_analytics_view_id) {
      this.signInToGoogle();
    }
  },
  methods: {
    ...mapActions(['removeWebsite']),
    signInToGoogle() {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          client_id: '<client-it>'
        }).then(auth2 => {
          if (!auth2.isSignedIn.get()) {
            auth2.signIn()
              .then(() => {
                this.queryReports();
              });
          } else {
            this.queryReports();
          }
        });
      });
    },
    queryReports() {
      const VIEW_ID = this.website.acf.google_analytics_view_id;

      gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
          reportRequests: [{
            viewId: VIEW_ID,
            dateRanges: [{
              startDate: '2021-01-01',
              endDate: 'today'
            }],
            metrics: [{
              expression: 'ga:goalConversionRateAll',
              alias: 'conversionRate'
            }
            ]
          },
          {
            viewId: VIEW_ID,
            dateRanges: [{
              startDate: '2021-01-01',
              endDate: 'today'
            }],
            metrics: [{
              expression: 'ga:users',
              alias: 'users'
            }]
          }]
        }
      }).then(res => {
        const conRate = res.result.reports.find(report => report.columnHeader.metricHeader.metricHeaderEntries[0].name === 'conversionRate');

        this.conversionRate = conRate.data.totals[0].values[0];

        const users = res.result.reports.find(report => report.columnHeader.metricHeader.metricHeaderEntries[0].name === 'users');

        this.users = users.data.totals[0].values[0];
      });
    },
    getWordFenceData() {
      const form2 = new FormData();

      form2.append('action', 'get_wordfence_nonce');

      axios.post(`${this.website.acf.domain}/wp-admin/admin-ajax.php`, form2)
        .then(res => {
          const form = new FormData();

          form.append('nonce', res.data.data.nonce);

          form.append('action', 'get_wordfence_data');

          axios.post(`${this.website.acf.domain}/wp-admin/admin-ajax.php`, form)
            .then(result => this.wordfenceData = result.data);
        }).catch(() => {
          this.wordfenceData.errorMsg = 'N/A';
        });
    },
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
  width: 700px;
  overflow-x: hidden;
  overflow-y: auto;
}

button:focus {
  outline: none;
}
</style>
