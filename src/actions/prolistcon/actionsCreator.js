
import { createAction } from "redux-actions"
import { ProListConType,DetailType } from "./actionsTypes"
import { productlistApi,DetailApi } from "api/product"

//商品列表
export const ProListConAsyncAction = (pageIndex,categoryId,key,sort,timestamp,summary) => {
    let ProListConAction = createAction(ProListConType, data => data)
    return async (dispatch) => {
        let data = await productlistApi(pageIndex,categoryId,key,sort,timestamp,summary)
        //    console.log(data)
        dispatch(ProListConAction(data))
    }
}

// 商品详情
export const DetailAsyncAction = (categoryId,productId,timestamp,summary) => {
    let DetailAction = createAction(DetailType, data => data)
    return async (dispatch) => {
        let data = await DetailApi(categoryId,productId,timestamp,summary)
        //    console.log(111,data)
        dispatch(DetailAction(data))
    }
}




 // pageIndex,categoryId,key,sort,timestamp,summary
        // 1,"120005100000003327","","","1575099670899","33a902e3c17770e21f9b3a091c0d8996"
