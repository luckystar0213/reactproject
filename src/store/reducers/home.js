//简化redux 判断写法(即switch判断)
import { handleActions } from "redux-actions"
import { everyHotType, crossType, womenType, findType ,loginType} from "../../actions/everyhot/actiontypes"
const defaultState = {
  home: [],
  cross: [],
  women: [],
  find: [],
  searchVal:"BALMAIN 最低可至2折111",
  login:[]
}

//handleActions 纯函数   //匹配的action
//默认的数据

export default handleActions({
  //推荐
  [everyHotType]: (state, action) => {
    // console.log(state,action,999)
    let homeState = JSON.parse(JSON.stringify(state));
    homeState.home = action.payload.data;
    // console.log(homeState.home)
    return homeState
  },

  //海外
  [crossType]: (state, action) => {
    let crossState = JSON.parse(JSON.stringify(state));
    crossState.cross = action.payload.data
    return crossState
  },

  //女士
  [womenType]: (state, action) => {
    let womenState = JSON.parse(JSON.stringify(state));
    womenState.women = action.payload.data;
    // console.log(state,999)
    return womenState
  },

  //搜索
  [findType]: (state,action) => {
    let findState = JSON.parse(JSON.stringify(state));
    
    findState.find = action.payload.data.result;
    // console.log(findState.find )
    return findState
  },


}, defaultState)

