<template>
  <div class="my">
    
    <input type="" name="" v-model="value"/>
    <div>
      <button @click='addcount'>点击</button>{{$store.state.test.count}}{{count}}
    </div>
    <div>
      <button @click='addnum'>点击</button>{{num}}
    </div>
    <button class="btn" @click='cktest'>数据测试</button>
    <div>
      <div> {{info.name}}</div>
      <div v-for="item in info">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import api from '../api/index'
import {mapState,mapGetter, mapActions ,mapMutations} from 'vuex'
export default {
  name: 'my',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:'',
      info:[{name:'rdx',date:'19941116'}]
    }
  },
  computed:{
    ...mapState(['num','count']),
    ...mapState({
      count:state=>{
        return state.test.count
      }
    })
  },
  methods:{
    ...mapActions([
      'loadc'
    ]),
    ...mapMutations(['addNum','addCount']),
    addcount(){
      this.addCount()
    },
    addnum:function(){
      this.$store.commit('addNum')
    },
    cktest:function(){
      const that = this;
      this.store.commit('loadc')
      var data ={
        id:1
      };
      // api.sublimt(data,function(res){
      //   that.info = res.Data
      //   console.log(that.info)
      // })
    },
  }
}
</script>

<style lang="less" scoped>
@import "../style/reset.css";
@btnbg:blue;
@btnclolor:#fff;
.btn{
  border:none;
  background: @btnbg;
  color:@btnclolor;
}

</style>
