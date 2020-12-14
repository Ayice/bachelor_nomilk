<template>
  <div class="w-full flex justify-between">
    <div class="w-1/2 flex">
      <div class="relative">
        <input
          :value="search"
          class="search h-full px-5 rounded-none text-sm focus:outline-none focus:bg-white"
          type="search"
          name="search"
          @input="handleInput($event)">

        <label
          :class="[{ 'filled-input': search }, 'text-gray-400', 'z-10', 'absolute', 'bottom-2', 'pointer-events-none', 'left-0']"
          for="search">
          Search
        </label>
      </div>
    </div>

    <div class="w-1/6 flex justify-end self-end">
      <button class="shadow-lg w-1/2 mr-2 bg-gray-100 text-white font-bold py-1 px-0 hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
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

      <button
        type="button"
        class="shadow-lg w-1/2 mr-2 bg-gray-100 text-white font-bold py-1 px-0 hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
        <div class="w-1/2 m-auto">
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput($event) {
      this.$emit('update:search', $event.target.value);
    }
  }

};
</script>

<style scoped>
  .search {
    position: relative;
    border: none;
    border-bottom: 2px solid rgb(156, 163, 175);
    border-radius: 0;
  }

  .search:focus ~ label{
    bottom: 90%;
    font-size: 50%;
  }

  label {
    bottom: 20%;
    transition: .3s all cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .filled-input {
    bottom: 90%;
    font-size: 50%;
  }
</style>
