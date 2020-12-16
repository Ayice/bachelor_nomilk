<template>
  <div class="w-full flex justify-between">
    <div class="w-1/2 flex">
      <div class="w-1/2 relative">
        <input
          :value="search"
          class="search shadow w-full border-0 h-full rounded-none text-xs focus:outline-none focus:bg-white"
          type="search"
          name="search"
          @input="handleInput($event)">

        <div class="flex content-center h-full absolute left-1 z-10 top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="25px"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <label
          :class="[{ 'filled-input': search }, 'text-gray-400', 'z-10', 'absolute', 'pointer-events-none', 'left-8', 'search-label', 'text-xs']"
          for="search">
          <div class="w-full inline-flex">
            <span class="ml-2">
              Search for domain
            </span>
          </div>
        </label>
      </div>
    </div>

    <div class="w-1/6 flex justify-end self-end">
      <div class="w-1/3 mr-3 relative">
        <button class="w-full h-full shadow-lg bg-gray-100 text-white font-bold py-1 px-0 hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
          <div class="w-1/2 m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2.5 -2.5 30 30"
              fill="#fff"
              preserveAspectRatio="none"
              stroke="#333">
              <path
                stroke-linecap="butt"
                stroke-linejoin="butt"
                stroke-width="1"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path
                stroke-linecap="square"
                stroke-linejoin="square"
                stroke-width="1"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </button>
      </div>

      <div
        v-click-outside="closeFilter"
        class="w-1/3 relative">
        <button
          type="button"
          class="w-full h-full shadow-lg bg-gray-100 text-white font-bold py-1 px-0 hover:bg-gray-300 focus:outline-none focus:bg-gray-100 active:outline-none"
          @click="showFilters = !showFilters">
          <div class="w-1/2 m-auto filter-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2.5 -5 30 30"
              fill="#fff"
              preserveAspectRatio="none"
              stroke="#333">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </div>
        </button>

        <transition name="slide-down">
          <div
            v-if="showFilters"
            class="flex flex-column absolute left-0 bg-white p-3 whitespace-nowrap">
            <p class="font-bold">
              Filter view
            </p>

            <label
              class="flex items-center"
              for="performance">
              <input
                id="performance"
                :value="filters.showPerformance"
                :checked="filters.showPerformance"
                type="checkbox"
                name="performance"
                @change="handleFilterUpdate('showPerformance')">
              <span class="ml-3">Performance </span>
            </label>

            <label
              for="seo"
              class="flex items-center">
              <input
                id="seo"
                :value="filters.showSeo"
                :checked="filters.showSeo"
                type="checkbox"
                name="seo"
                @change="handleFilterUpdate('showSeo')">
              <span class="ml-3">SEO</span>
            </label>

            <label
              class="flex items-center"
              for="wordFence">
              <input
                id="wordFence"
                :value="filters.showWordFence"
                :checked="filters.showWordFence"
                type="checkbox"
                name="wordFence"
                @change="handleFilterUpdate('showWordFence')">
              <span class="ml-3">WordFence</span>
            </label>

            <label
              class="flex items-center"
              for="conversionRate">
              <input
                id="conversionRate"
                :value="filters.showConversionRate"
                :checked="filters.showConversionRate"
                type="checkbox"
                name="conversionRate"
                @change="handleFilterUpdate('showConversionRate')">
              <span class="ml-3">Conversion Rate</span>
            </label>

            <label
              class="flex items-center"
              for="upTime">
              <input
                id="upTime"
                :value="filters.showUpTime"
                :checked="filters.showUpTime"
                type="checkbox"
                name="upTime"
                @change="handleFilterUpdate('showUpTime')">
              <span class="ml-3">UpTime</span></label>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    search: {
      type: String,
      default: ''
    },
    filters: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showFilters: false
    };
  },
  methods: {
    handleInput($event) {
      this.$emit('update:search', $event.target.value);
    },
    handleFilterUpdate(name) {
      this.$emit('update:filters', { ...this.filters, [name]: !this.filters[name] });
    },
    closeFilter() {
      this.showFilters = false;
    }
  }

};
</script>

<style scoped>
  .search {
    padding: 1rem;
    padding-left: 2.5rem;
    border: none;
    position: relative;
  }

  .search:focus ~ label{
    bottom: 80%;
    font-size: 50%;
  }

  .search:focus ~ label svg{
    width: 10px;
  }

  .search-label {
    bottom: 50%;
    transform: translateY(50%);
    transition: .3s all cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .filled-input {
    bottom: 80%;
    font-size: 50%;
  }

  .filled-input ~ svg {
    width: 10px;
  }

  .slide-down-enter-active, .slide-down-leave-active{
  transition: all .5s;
}
.slide-down-enter, .slide-down-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-25px);
  opacity: 0;
}
</style>
