import {CrossborderAction} from "actions/everyhot/actionCreator"

export const mapStateToProps=(state)=>({
    cross:state.home.cross,
    // categoryId:state.home.categoryId,
    // timestamp:state.home.timestamp,
    // summary:state.home.summary
})

export const mapDispatchToProps=(dispatch)=>({
    //只限于修改state中的数据
    handleAsyncCross(){
        dispatch(CrossborderAction())
    }
})


