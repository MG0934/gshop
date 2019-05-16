<template>
  <div class="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
import {mapActions} from 'vuex'
export default {
  components: {
    FooterGuide
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    ...mapActions(['getAddress','getUserInfo'])
  },
  created() {},
  mounted() {
    //this.$store.dispatch('getAddress')
    this.getAddress();
    this.getUserInfo();
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>