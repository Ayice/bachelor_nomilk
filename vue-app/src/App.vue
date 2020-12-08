<template>
  <div class="mt-5">
    Hellow Bish
    <test></test>
  </div>
</template>

<script>
  import Test from './components/Test.vue'


  export default {
    components: {
      Test
    },
    mounted() {
      console.log( 'test' )
    }
  }
</script>

<style>
  h1 {
    color: blue;
  }

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
