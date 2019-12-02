import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Main} from "./styled"
import {connect} from "react-redux"
import {mapActionToProps,mapDispatchToProps} from "./mapStore"
@connect(mapActionToProps,mapDispatchToProps)


class Find extends Component {
    render() {
        let {searchVal}=this.props
        return (
            <PageContainer>
                <Main>
                    <ul>
                        <li className="search_ico">
                            <i></i>
                        </li>
                        <li className="search">
                            <input type="text" className="keyword" value={searchVal} onChange={this.handleGetValue.bind(this)} />
                        </li>
                        <li className="remove">
                            <span className="del">
                                取消
                            </span>
                        </li>
                    </ul>
                    
                    <div className="find">
                        <h3 >搜索发现</h3>
                        <div className="find-list">
                            <a><span>PORTS</span></a>
                            <a><span>羊毛衫</span></a>
                            <a><span>FENDI</span></a>
                            <a><span>马丁靴</span></a>
                            <a><span>GUCCI</span></a>
                            <a><span>床品四件套</span></a>
                        </div>
                    </div>

                    <div className="history">
                        <h3>历史搜索
                            <a className="delete">
                                <i></i>
                            </a>
                        </h3>
                       
                    </div> 

                </Main>
            </PageContainer>
        )
    }
    handleGetValue(e){
        let val=e.target.value;
        // dispatch(TitleAction(val))
        this.props.handleAsyncFind(val)
        console.log(val)
    }
  //onChange={this.handleGetValue.bind(this)}
    // componentDidMount(){
      
    //     this.props.handleAsyncFind()
    // }
    
}

export default Find