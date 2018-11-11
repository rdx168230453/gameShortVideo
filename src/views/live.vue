<template>
  <div class="appLive">
      <div>
        <ul class="live_ulBox">
          <li v-for="(item,index) in indexLiveList" :key='index' @click="linkToLive(item,index)">
            <img class="liveBg_default" :src="item.room_src" />
            <div class="floatLivebox">
              {{item.room_name}}
            </div>
          </li>
        </ul>
      </div>
       <!-- <router-view/> -->
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
      indexLiveList: []
    };
  },
  created() {
    var self = this;
    //获取30个直播
    axios.get("/api/RoomApi/live", {}).then(res => {
      if (res.status == 200) {
        var data = res.data.data;
        self.indexLiveList = res.data.data;
        console.log(res.data);
      }
    });
  },
  computed: {
  },
  methods: {
    linkToLive: function(item, index) {
      var self = this;
      self.$router.push({path:'/live/detail',query:{id:item.room_id,url:item.url}})
    },
  }
};
</script>

<style lang="less" scoped>
.live_ulBox {
  display: block;
}
.live_ulBox > li {
  width: 100%;
  position: relative;
}
.live_ulBox > li img.liveBg_default {
  width: 100%;
}
.live_ulBox > li .floatLivebox {
  position: absolute;
  width: 100%;
  color: #fff;
  z-index: 1;
}
</style>
