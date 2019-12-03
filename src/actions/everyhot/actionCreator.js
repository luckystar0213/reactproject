import { everyHotType, crossType, womenType, findType, inputType } from "./actiontypes"
import { createAction } from "redux-actions"
import { homeApi, crossApi, womenApi, findApi } from "api/home"


//推荐
export const everyhotAction = () => {
    //everyAction 是一个函数需要调用
    let everyAction = createAction(everyHotType, (data) =>({ data:data}))
    return async (dispatch) => {
        let data = await homeApi()
        // console.log(data,333)
        dispatch(everyAction(data.lists))
    }
}

//海外
export const CrossborderAction = (categoryId, timestamp, summary) => {
    let crossAction = createAction(crossType, (data) =>({ data:data}))
    return async (dispatch) => {
        let data = await crossApi(categoryId, timestamp, summary)
        // console.log(data)
        dispatch(crossAction(data.eventList))
    }

}

//女士
export const WomenAction = (categoryId, timestamp, summary) => {
    let nvAction = createAction(womenType, data => data)
    return async (dispatch) => {
        let data = await womenApi(categoryId, timestamp, summary)
        // console.log(data,123)
        dispatch(nvAction(data))
    }
}


//搜索
export const FindAction = (text) => {
    let searchAction = createAction(findType)
    return async (dispatch) => {
        let data = await findApi(text)
        // console.log(data)
        dispatch(searchAction())
    }
}
export const TitleAction = (value) => ({
    type: inputType,
    value,
})



