import http from "utils/request";

/**
 * 商品列表api
 * categoryId:商品类型模块id
 */

export const productlistApi = (pageIndex,categoryId,key,sort) =>http.get({
    url:"/ajax/appapi/event/product/v3",
    data:{
        pageIndex,
        categoryId,
        key,
        sort,
    }
})

//商品详情api
export const DetailApi = (categoryId,productId) =>http.get({
    url:"/ajax/appapi/product/detail/v3",
    data:{
        categoryId,
        productId,
    }
})

//搜索列表api
export const SearchListApi = (pageIndex,q,sort,key,secondCategoryId) =>http.get({
    url:"/ajax/appapi/search/searchKey/v3",
    data:{
        pageIndex,
        q,
        sort,
        key,
        secondCategoryId,
    }
})





