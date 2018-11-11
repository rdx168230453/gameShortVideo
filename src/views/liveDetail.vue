<template>
  <div class="appLiveDetail">
      <div>
        <video src="http://vodhls1-azurecdn.douyucdn2.cn/live/normal_live-138286rx1LpE8BB4--20180105011125/playlist.m3u8?tlink=5bd1dc14&tplay=5bd27dcc&exper=0&nlimit=5&us=ad6492f170a4828a2cdd35c5ae8cbadf&sign=d492cbf3ecdbd4a5da20d9c76078b803&u=0&d=ad6492f170a4828a2cdd35c5ae8cbadf&ct=h5&vid=2425192&pt=2&cdn=azure" autoplay controls></video>
        <iframe src="http://www.douyu.com/99999" frameborder="0" allowfullscreen="true" width="100%" height="100%"></iframe>
      </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import api from '../api/index'
import {mapState,mapGetter, mapActions,mapMutations } from 'vuex'
export default { 
  name: 'liveDetail',
  data () {
    return {
      live:[]
    }
  },
  beforeCreate(){
  
  },
  created(){
    var roomId = this.$route.query.id
    axios.get("/api/RoomApi/room/"+roomId, {
    }).then(res => {
      if (res.status == 200) {
        var data = res.data.data;
        // self.indexLiveList = res.data.data;
        console.log(data);
      }
    });
  },
  mounted(){
    var self = this;
    var parpams = this.$route.query
     console.log(parpams)
  },
  computed:{
    ...mapState(['num']),
    ...mapState({
      count:state=>{
        return state.test.count
      }
    })
  },
  methods:{
    ...mapMutations([
      'addNum',
      'addCount'
    ]),
    linkToLive:(item,index)=>{
     
    },
    ...mapActions([
      'myAddNum'
    ]),
    addnum:function(){
      // this.$store.commit('addNum')
      // this.addNum()
      // this.myAddNum()
      this.myAddNum()
    },
    addcount:function(){
      this.addCount()
    },
    cktest:function(){
      const that = this;

    },
  }
}
</script>

<style lang="less" scoped>
</style>
