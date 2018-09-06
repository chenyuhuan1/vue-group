<template>
  <div id="app">
    <router-view/>
      <alerts></alerts>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
import alerts from '@/components/alerts/alerts.vue'
// import {hotcity} from './server/getData.js'
export default {
  name: 'App',
  computed: {
    
  },
  // methods: {
  //   ...mapMutations([
  //     'CHANGECOUNT'
  //   ]),
  //   ...mapActions([
  //     'changecount'
  //   ]),
  //   change() {
  //     console.log(123);
  //     this.changecount();
  //   },
  //   get() {
  //     hotcity().then(res => {
  //       console.log(res);
  //     })
  //   }
  // }，
  mounted() {

  },
  components: {
    alerts,
  }
}
</script>

<style lang="less">
</style>
