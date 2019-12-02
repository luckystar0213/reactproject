import http from "utils/request";

//推荐的接口
export const homeApi = (params = '%7B%7D', timestamp = '1575123136876', summary = '6c963fb61c180f1984d8b5fce0d4fa3d') => http.get({
    url: "/appapi/home/eventForH5?params=%7B%7D&timestamp=1575123136876&summary=6c963fb61c180f1984d8b5fce0d4fa3d",
    // url:"/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1575205254767&summary=80f4846b2bffe27651e6f735dbea243f",
    data: {
        params: params,
        timestamp: timestamp,
        summary: summary
    }
})

//海外接口
export const crossApi = (categoryId = 'crossborder', timestamp = 1575205254767, summary = '80f4846b2bffe27651e6f735dbea243f') => http.get({
    url: "/appapi/silo/eventForH5",
    data: {
        categoryId: categoryId,
        pageIndex: 1,
        timestamp: timestamp,
        summary: summary,
        platform_code: 'H5'
    }
})
//?categoryId=crossborder&pageIndex=1&timestamp=1575205254767&summary=80f4846b2bffe27651e6f735dbea243f


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