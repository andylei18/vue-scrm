<style>
  [v-cloak]{
    display: none;
  }
  .v-cloak--block,.v-cloak--inline,.v-cloak--inlineBlock{
    display: none;
  }
  .ui-view {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }

  .fade-enter{
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
  .fade-leave {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);

  }

  .back-enter {
    opacity: 1;
    -webkit-transform: translate3d(-110%, 0, 0);
    transform: translate3d(-110%, 0, 0);

  }
  .back-leave{
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
</style>

<template>

  <div class="web-app">

    <!-- 缓存一级路由切换的页面 -->
    <router-view keep-alive></router-view>

  </div>

</template>

<script>


  export default {
    data () {
      return {
        loading           : true,  //loading
        effect            : 'fade', //路由模板动画参数
        //routeList         : [],     //访问周期中所访问了那些路径,在route.js中设置
      }
    },
    components:{

    }
  }
</script>
