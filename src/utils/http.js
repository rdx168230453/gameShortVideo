import axios from 'axios'

export default {
  post:(...args)=>{
    axios.post(args[0],args[1]).then((res)=>{
      if(res.status == 200){
        args[2](res.data)
      }
    })
  }
}
