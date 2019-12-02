//封装axios请求
import { fetch as fetchPro } from "whatwg-fetch"
import qs from "qs";


const get = (options) => {
    //拼接get请求的url
    let url = options.url;
    let data = options.data;
    var str = "";
    if (data) {
        for (var key in data) {
            str += "&" + key + "=" + data[key];
        }
    }
    url = url + "?" + str.slice(1);

    var result = fetchPro(url, {
        headers: {
            "content-type": "application/json",
            ...options.headers
        }
    }).then(res => res.json());

    return result;
}


const post = (options) => {
    var result=fetchPro(options.url,{
        method:"post",
        body:qs.stringify(options.data),//qs.stringify()将对象 序列化成URL的形式，以&进行拼接.
        headers:{
            "content-type":"application/x-www-form-urlencoded",
            ...options.headers
        }
    }).then(res=>res.json());
    return result;
}

export default{
    get ,
    post
}
