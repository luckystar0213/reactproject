
import { DetailAsyncAction, ColorAsyncAction } from "actions/prolistcon/actionsCreator"

export const mapStateToProps = (state) => ({
    proInfos: state.product.proInfos,
})

export const mapDispatchToProps = (dispatch) => ({
    handleAsyncDetail(categoryId, productId) {
        dispatch(DetailAsyncAction(categoryId, productId))
    },
})