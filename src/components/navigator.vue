<template>
  <header id="navigator" class="navbar navbar-fixed-top">
    <div class="navigation-view nav-inner row-flex">
      <header class="nav-header">
        <a class="logo on-logo"></a>
      </header>
      <div class="navigation-search-layer"></div>
    </div>
  </header>
</template>

<script>
    export default {

        data () {
            return {
                logo: 'assets/images/navigator/logo.png',
            }
        },
        created () {

        }
    }
</script>

<style>
#navigator {
    z-index: 100
}

#navigator .nav-set-handler {
    display: inline-block;
    height: 50px;
    float: left;
    color: #383838;
    text-align: center
}

#navigator .nav-set-handler .active,#navigator .nav-set-handler .open,#navigator .nav-set-handler:hover {
    color: #03a9f4
}

#navigator .nav-inner {
    position: relative;
    min-height: 50px;
    background-color: #fff;
    z-index: 100;
    box-shadow: 0 0 2px 0 rgba(0,0,0,.5)
}

#navigator .nav-header {
    width: 280px
}

#navigator .nav-header .logo {
    width: 158px;
    margin: 0 15px;
    padding: 0;
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    height: 50px;
    float: left;
    color: #383838;
    text-align: center;
    background: url(../assets/images/navigator/logo.png) #ea5503 no-repeat;
}
</style>
