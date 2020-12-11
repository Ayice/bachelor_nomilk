<template>
  <div class="flex justify-between border-b-2 p-3 bg-gray-100 hover:bg-gray-200">
    <div>
      {{ website.custom_fields.domain }}
    </div>

    <div>
      {{ website.custom_fields.google_analytics_api_key }}
    </div>

    <div>
      {{ website.ID }}
    </div>

    <div>
      {{ website.ID }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    website: {
      type: Object,
      required: true
    }
  }

};
</script>

<style>

</style>
