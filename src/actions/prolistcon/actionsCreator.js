
import { createAction } from "redux-actions"
import { ProListConType, DetailType, SearchListType } from "./actionsTypes"
import { productlistApi, DetailApi, SearchListApi } from "api/product"

//商品列表
export const ProListConAsyncAction = (pageIndex, categoryId, key, sort) => {
    let ProListConAction = createAction(ProListConType, data => data)
    return async (dispatch) => {
        let data = await productlistApi(pageIndex, categoryId, key, sort)
        // console.log(data)
        dispatch(ProListConAction(data))
    }
}

// 商品详情
export const DetailAsyncAction = (categoryId, productId) => {
    let DetailAction = createAction(DetailType, data => data)
    return async (dispatch) => {
        let data = await DetailApi(categoryId, productId)
        //    console.log(111,data)
        dispatch(DetailAction(data))
    }
}


//搜索列表
export const SearchListConAsyncAction = (pageIndex,q,key,sort,secondCategoryId) => {
    let SearchListConAction = createAction(SearchListType, data => data)
    return async (dispatch) => {
        let data = await SearchListApi(pageIndex,q,key,sort,secondCategoryId)
        // console.log(data)
        dispatch(SearchListConAction(data.products))
    }
}





