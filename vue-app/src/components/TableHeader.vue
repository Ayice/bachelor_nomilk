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

    <div class="w-2/12 flex justify-end">
      <div class="w-1/3">
        <button
          class="p-3 bg-gray-100 hover:bg-gray-300 rounded-sm hover:text-black font-bold focus:outline-none focus:bg-gray-100 focus:text-black"
          type="button">
          Test
        </button>
      </div>

      <div class="w-1/3">
        <button
          type="button"
          class="p-3 bg-gray-100 hover:bg-gray-300 rounded-sm hover:text-black font-bold focus:outline-none focus:bg-gray-100 focus:text-black">
          Test2
        </button>
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
