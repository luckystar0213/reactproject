
import { createAction } from "redux-actions"
import { ProListConType, DetailType, AddColor } from "./actionsTypes"
import { productlistApi, DetailApi } from "api/product"

//商品列表
export const ProListConAsyncAction = (pageIndex, categoryId, key, sort) => {
    let ProListConAction = createAction(ProListConType, data => data)
    return async (dispatch) => {
        let data = await productlistApi(pageIndex, categoryId, key, sort)
        //    console.log(data)
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






