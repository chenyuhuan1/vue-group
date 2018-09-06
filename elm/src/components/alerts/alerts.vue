<template>
  <transition name="fade-2s">
    <div class="alert" v-if="alertMsg != ''">{{alertMsg}}</div>
  </transition>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
  export default {
    name: 'alerts',
    data() {
      return {
        show: true,
      }
    },
    methods: {
      ...mapMutations([
        'CHANGECLERTMSG'
      ]),
    },
    computed: {
      ...mapState([
        'alertMsg'
      ])
    },
    mounted() {
      
    },
  }
</script>

<style lang="less">
  .alert {
    padding: 0.2rem 0.3rem;
    background: rgba(0, 0, 0, 0.6);
    font-size: 0.4rem;
    color: #fff;
    border-radius: 0.1rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .fade-2s-enter,.fade-2s-leave-to {
    transform: translate(-50%,-50%) scale(0.1);
  }
  .fade-2s-enter-active,.fade-2s-leave-active {
    transition: all .1s;
  }
</style>
