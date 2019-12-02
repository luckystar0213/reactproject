
import { DetailAsyncAction } from "actions/prolistcon/actionsCreator"

export const mapStateToProps = (state) => ({
    proInfos:state.product.proInfos
})

export const mapDispatchToProps = (dispatch) => ({
    handleAsyncDetail(categoryId,productId,timestamp,summary){
        dispatch(DetailAsyncAction(categoryId,productId,timestamp,summary))
    }
})