import {SearchListConAsyncAction} from "actions/prolistcon/actionsCreator"

export const mapStateToProps = (state) =>({
    searchlist:state.product.searchlist
})

export const mapDispatchToProps = (dispatch) =>({
    handelAsyncSearchListCon(pageIndex,q,key,sort,secondCategoryId){
       dispatch(SearchListConAsyncAction(pageIndex,q,key,sort,secondCategoryId))
    },
})
