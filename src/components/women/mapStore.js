import {WomenAction} from "../../actions/everyhot/actionCreator"

export const mapStateToProps=(state)=>({
  women:state.home.women
})


export const mapDispatchToProps=(dispatch)=>({
    handleAsyncWomen(categoryId,timestamp,summary){
        dispatch(WomenAction(categoryId,timestamp,summary))
    }
})