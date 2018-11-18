<template>
  <div class="appLiveDetail">
      <div>
        <video :src="roomUrl" autoplay controls></video>
        <iframe :src="roomUrl" frameborder="0" allowfullscreen="true" width="100%" height="100%"></iframe>
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
      liveData:{},
      roomUrl:''
    }
  },
  beforeCreate(){
  
  },
  created(){
    console.log(this.$route.query)
    var roomId = this.$route.query.id
    this.roomUrl = this.$route.query.url
    axios.get("/api/RoomApi/room/"+roomId, {
    }).then(res => {
      if (res.status == 200) {
        var data = res.data.data;
        self.liveData = data;
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
