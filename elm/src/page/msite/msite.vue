<template>
  <div class="msite">
    <heads :isback="true"></heads>
  </div>
</template>

<script>
  import heads from '../../components/heads/heads.vue'
  import {fetch} from '../../config/fetch.js';
  export default {
    data() {
      return {
        geohash: '',
      }
    },
    methods: {

    },
    mounted() {
      this.geohash = this.$route.query.geohash;
    },
    components: {
      heads,
    }
  }
</script>

<style lang="less">
  .msite {

  }

</style>
