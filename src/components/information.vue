<template>
  <div class="news">
    
    <input type="" name="" v-model="value"/>
   
    <button class="btn" @click='cktest'>数据测试</button>
    <div>
      <div> {{count}} {{info.name}}</div>
      <div v-for="item in info" :key="item">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import api from '../api/index'
import {mapState,mapGetter, mapActions } from 'vuex'
export default {
  name: 'news',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:'',
      info:[{name:'rdx',date:'19941116'}]
    }
  },
  computed:{
    ...mapState(['count'])
  },
  methods:{
    ...mapActions([
      'loadc'
    ]),
    cktest:function(){
      const that = this;
      this.loadc()
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
