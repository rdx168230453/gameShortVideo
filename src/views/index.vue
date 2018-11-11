<template>
  <div class="appIndex">
      <div class="appTabs">
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
      </div>
      <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import api from "../api/index";
import { mapState, mapGetter, mapActions, mapMutations } from "vuex";
export default {
  name: "index",
  data() {
    return {
      nowId:'live'
    };
  },
  created() {
  },

  methods: {
   tab(index){
      var that = this;
      if(this.nowId == index) return
      this.nowId = index
      switch(index){
        case 'live':
          that.$router.push({path:'/'})
          break;
        case 'video':
          that.$router.push({path: "/video"})
          break;
        case 'information':
          that.$router.push({path:"/information"})
        case 'my':
          that.$router.push({path:'/my'})
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.appTabs{
  width: 100%;
  position:fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content:center;
  align-items: center;
  z-index: 1000
}
.appTabs > div{
  width: 100%;
  height: 50px;
}
.tab_children{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
}
.tab_children > i{
  display: block;
  width: 20px;
  height: 20px;
  background: #2c3e50;
}
.tabs_licur{
  color: #F56C6C
}
</style>
