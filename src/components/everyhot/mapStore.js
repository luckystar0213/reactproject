import {everyhotAction} from "actions/everyhot/actionCreator"

export const mapStateToProps=(state)=>({
    home:state.home.home
})

export const mapDispatchToprops=(dispatch)=>({
    handleAsyncHot(){
        // console.log("mapstore",222)
        dispatch(everyhotAction())
    }
})

