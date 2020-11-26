<template>
  <div>
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