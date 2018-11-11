import http from './../utils/http.js'
const path = '';
export default {
	sublimt:(data,success)=>{
    const url = path + '/user/login'
    http.post(url,data,success)
  }
}
