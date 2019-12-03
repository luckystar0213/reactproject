import { handleActions } from "redux-actions";
import { ProListConType,DetailType } from "actions/prolistcon/actionsTypes"
const defaultState = {
    productlist: {},
    proInfos:{},

}
export default handleActions({
    [ProListConType]: (state, action) => {
        let ProListState = JSON.parse(JSON.stringify(state))
        ProListState.productlist = action.payload.products
        // console.log( ProListState.productlist)
        return ProListState
    },
    [DetailType]: (state, action) => {
        let InfosState = JSON.parse(JSON.stringify(state))
        // console.log(action.payload.infos)
        InfosState.proInfos =action.payload.infos
        // console.log(222,InfosState.proInfos)
        return InfosState
    }
}, defaultState)




// proInfos.images?proInfos.images.map():""
