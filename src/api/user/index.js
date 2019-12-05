import http from "utils/request";

//修改密码接口
export const PwdApi = (id,name,password) => http.post({
    url: "/users/updateInfo",
    data: {
       id,name,password  
    }
})