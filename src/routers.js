module.exports = function(router){
  router.map({
    '/home':{
      name:'home',
      component: function(reslove){
          return require(['./views/home/index.vue'],reslove)
      }
    }
  });
};
