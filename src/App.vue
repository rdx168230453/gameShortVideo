<template>
  <div id="app">
    <!-- <div class="appTabs">
      <div :class="['tab_children',nowId=='live'?'tabs_licur':'']" @touchstart="tab('live')" >
        <i></i>
        <div>直播</div>
      </div>
      <div :class="['tab_children',nowId=='video'?'tabs_licur':'']" @touchstart="tab('video')" >
        <i></i>
        <div>视频</div>
      </div>
      <div :class="['tab_children',nowId=='information'?'tabs_licur':'']" @touchstart="tab('information')" >
        <i></i>
        <div>资讯</div>
      </div>
      <div :class="['tab_children',nowId=='my'?'tabs_licur':'']" @touchstart="tab('my')">
        <i></i>
        <div>我的</div>
      </div>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
  methods:{
    
  }
}
</script>

<style>
@import './style/reset.css'; /*引入公共样式*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
