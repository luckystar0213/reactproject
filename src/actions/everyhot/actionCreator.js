import {everyHotType,crossType,womenType,findType,inputType,loginType} from "./actiontypes"
import {createAction} from "redux-actions"
import {homeApi,crossApi,womenApi,findApi,loginApi} from "api/home"


//推荐
export const everyhotAction=()=>{
    //everyAction 是一个函数需要调用
    let everyAction=createAction(everyHotType,(data)=>({
        data
    }));
    return async(dispatch)=>{
        let data=await homeApi()
        dispatch(everyAction(data.lists))
    }
}


//海外
export const CrossborderAction=()=>{
    let crossAction=createAction(crossType,(data)=>({
        data
    }))
    return async(dispatch)=>{
        let data=await crossApi()
        console.log(data.eventList)
        dispatch(crossAction(data.eventList))
    }
}


//女士
export const WomenAction=(categoryId,timestamp,summary)=>{
    let nvAction=createAction(womenType,(data)=>({
        data
    }));
    return async(dispatch)=>{
        let data=await womenApi(categoryId,timestamp,summary)
        // console.log(data,123)
        dispatch(nvAction(data.eventList))
    }
}


//搜索
export const FindAction=(text)=>{
    let searchAction=createAction(findType,(data)=>({
        data
    }));
    return async(dispatch)=>{
        let data=await findApi(text)
        // console.log(data)
        dispatch(searchAction(data))
    }
}







