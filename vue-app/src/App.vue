<template>
  <div class="flex w-full">
    <div class="w-1/6">
      <side-bar></side-bar>
    </div>

    <div class="w-4/6 m-auto">
      <website-table></website-table>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import WebsiteTable from './components/WebsiteTable.vue';

export default {
  components: {
    SideBar,
    WebsiteTable
  }
};
</script>

<style>
  body {
    background-color:#eff3ef;
    --tw-text-opacity: 1;
    color: rgba(75, 85, 99, var(--tw-text-opacity));
  }

  #masthead {
    display: none;
  }

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
