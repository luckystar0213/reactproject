import http from "utils/request";

//推荐的接口
export const homeApi = () => http.get({
    url: "/appapi/home/eventForH5?params=%7B%7D&timestamp=1575123136876&summary=6c963fb61c180f1984d8b5fce0d4fa3d",
    data: {
        // params: params,
        // timestamp: timestamp,
        // summary: summary
    }
})

//海外接口
export const crossApi = (categoryId='crossborder',timestamp='1575288542955',summary='b85df584098da59f82b45a1a4c882d0b') => http.get({
    url: "/appapi/silo/eventForH5",
    data: {
        categoryId: categoryId,
        pageIndex: 1,
        timestamp: timestamp,
        summary: summary,
        platform_code: 'H5'
    }
})


//女士接口
//http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=1575251883715&summary=6af4ed1e91027665c49ab835b4b41615&platform_code=H5
export const womenApi = (categoryId = 'women', timestamp = 1575251883715, summary = '6af4ed1e91027665c49ab835b4b41615') => http.get({
    url: "/appapi/silo/eventForH5",
    data: {
        categoryId: categoryId,
        pageIndex: 1,
        timestamp: timestamp,
        summary: summary,
        platform_code: 'H5'
    }
})


//搜索接口
//http://www.mei.com/appapi/search/searchSuggest/v3?text=%E5%A5%B3
export const findApi = (text) => http.get({
    url: "/appapi/search/searchSuggest/v3",
    data: {
        text: text
    }
})

//登录接口
export const loginApi = (username,password) => http.post({
    url: "/users/login",
    data: {
        username ,
        password   
    }
})
