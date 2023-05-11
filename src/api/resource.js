import http from "./request.js";
let path = {  
  getUserInfo:'getuserinfo',                         //判断用户是否登录
} 
export default {
  //判断用户是否登录
  getUserInfo(params) {
    return http.get(path.getUserInfo, params);
  },
};
