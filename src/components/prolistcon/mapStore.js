import {ProListConAsyncAction} from "actions/prolistcon/actionsCreator"

export const mapStateToProps = (state) =>({
    productlist:state.product.productlist
})

export const mapDispatchToProps = (dispatch) =>({
    handelAsyncProListCon(pageIndex,categoryId,key,sort,timestamp,summary){
       dispatch(ProListConAsyncAction(pageIndex,categoryId,key,sort,timestamp,summary))
    },
})
