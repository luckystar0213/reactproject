import http from "utils/request";

/**
 * 商品列表api
 * categoryId:商品类型模块id
 */

export const productlistApi = (pageIndex,categoryId,key,sort,timestamp,summary) =>http.get({
    url:"/ajax/appapi/event/product/v3",
    data:{
        pageIndex,
        categoryId,
        key,
        sort,
        timestamp,
        summary,
    }
})

//商品详情api
export const DetailApi = (categoryId,productId,timestamp,summary) =>http.get({
    url:"/ajax/appapi/product/detail/v3",
    data:{
        categoryId,
        productId,
        timestamp,
        summary,
    }
})
//'2120005100000003137','2121212199000176808','1575251094554','afa361df2b0c8ea174b99f26cf915463'
// /appapi/product/detail/v3?categoryId=2042204290000007194&productId=2121212199000176808&
// platform_code=H5&timestamp=1575251094554&summary=afa361df2b0c8ea174b99f26cf915463


// pageIndex=1,categoryId='120005100000003327',key='',sort='',
// timestamp='1575099670899',summary='33a902e3c17770e21f9b3a091c0d8996'


// export const productlistApi = () =>http.get({
//     url:"/ajax/appapi/event/product/v3?pageIndex=1&categoryId=2120005100000003137&key=&sort=&timestamp=1575121424093&summary=ec50aa5e5652b3331a71edd0c8ab1bc2&platform_code=H5",

// })





