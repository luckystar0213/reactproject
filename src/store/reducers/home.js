//简化redux 判断写法(即switch判断)
import { handleActions } from "redux-actions"
import { everyHotType, crossType, womenType, findType } from "../../actions/everyhot/actiontypes"
const defaultState = {
  home: [],
  cross: [],
  women: [],
  find: [],
  searchVal:"BALMAIN 最低可至2折111"
}

//handleActions 纯函数   //匹配的action
//默认的数据
export default handleActions({
  //推荐
  [everyHotType]: (state, action) => {
    // console.log(state,action,999)
    let homeState = JSON.parse(JSON.stringify(state));
    homeState.home = action.payload.data.lists;
    // console.log(homeState.home)
    return homeState
  },

  //海外
  [crossType]: (state, action) => {
    //  console.log(state,action)
    let crossState = JSON.parse(JSON.stringify(state));
    crossState.cross = action.payload.eventList;
    // console.log(crossState.cross,1011)
    return crossState
  },

  //女士
  [womenType]: (state, action) => {
    let womenState = JSON.parse(JSON.stringify(state));
    womenState.women = action.payload.eventList;
    console.log(state,999)
    return womenState
  },

  //搜索
  [findType]: (state,action) => {
    // console.log(state)
    let findState = JSON.parse(JSON.stringify(state));
    findState.find = action.payload;
    // console.log(action)
    return findState
  }

}, defaultState)

