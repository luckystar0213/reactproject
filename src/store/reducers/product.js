import { handleActions } from "redux-actions";
import { ProListConType, DetailType, SearchListType } from "actions/prolistcon/actionsTypes"
const defaultState = {
    productlist: {},
    proInfos: {},
    searchlist:{}
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
        InfosState.proInfos = action.payload.infos
        // console.log(222,InfosState.proInfos)
        return InfosState
    },
    [SearchListType]: (state, action) => {
        let SearchState = JSON.parse(JSON.stringify(state))
        // console.log(action.payload)
        SearchState.searchlist = action.payload
        
        return SearchState
    }
}, defaultState)




// proInfos.images?proInfos.images.map():""
