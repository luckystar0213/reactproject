import {everyhotAction} from "actions/everyhot/actionCreator"

export const mapStateToProps=(state)=>({
    home:state.home.home
})

export const mapDispatchToprops=(dispatch)=>({
    handleAsyncHot(){
       
        dispatch(everyhotAction())
    }
})

