import {FindAction,TitleAction} from "actions/everyhot/actionCreator"

export const mapActionToProps=(state)=>({
    // searchVal:state.home.searchVal,
    find:state.home.find

})


export const mapDispatchToProps=(dispatch)=>({
  
    handleAsyncFind(val){
        dispatch(FindAction(val))
    }
})