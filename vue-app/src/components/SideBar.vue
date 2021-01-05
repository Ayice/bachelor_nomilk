<template>
  <div class="sidebar-wrapper flex flex-col h-screen align-items-center py-5 bg-gray-200">
    <!-- wrapper -->

    <div class="flex flex-col h-screen justify-between w-4/5">
      <!-- logo og user+role container -->

      <div class="flex flex-col">
        <!-- user container -->
        <div>
          <img
            class="mb-6 w-full"
            src="http://nomilkcustomeroverview.com/wp-content/uploads/2020/12/nomilk.svg"
            alt="NoMilk Logo"><!-- logo image her -->
        </div>

        <div class="flex items-start">
          <img
            class="rounded-full h-12 w-12"
            src="http://nomilkcustomeroverview.com/wp-content/uploads/2020/12/Mathias-til-jobside.jpg"
            alt="Mathias Vorret"><!-- user image her-->
          <div class="flex flex-col  pl-2">
            <p class="text-lg font-semibold">
              User name
            </p> <!-- user name -->
            <p class="text-sm font-normal">
              User role
            </p> <!-- user role -->
          </div>
        </div>
      </div>

      <website-form></website-form>

      <div class="flex align-items-start">
        <!-- logout container -->
        <button class="w-full hover:bg-transparent hover:text-indigo-600 focus:bg-transparent focus:outline-none focus:border-none active:bg-none">
          <svg
            class="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Log ud
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import WebsiteForm from './WebsiteForm.vue';

export default {
  components: {
    WebsiteForm
  }
};
</script>
