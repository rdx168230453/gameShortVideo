<template>
  <div class="videoPage">123
  </div>
</template>

<script>
import axios from 'axios'
import api from '../api/index'
import utils from './../utils/utils'
export default {
  name: 'videoPage',
  data () {
    return {

    }
  },
  created(){
    axios.post('http://route.showapi.com/1550-1',{
      'showapi_appid':'80790',
      'showapi_timestamp':utils.formatterDateTime(),
      'showapi_res_gzip':'1',
      'showapi_sign':'08d6c21541bb4f87a2ea06f6dbdc4b60',
      "url":"https://www.iqiyi.com/v_19rr414p94.html"
    }).then((res)=>{
      console.log(res)
    })
  },
  computed:{
  },
  methods:{
    
  }
}
</script>

<style scoped>

</style>
