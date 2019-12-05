import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { Main } from "./styled"
import { connect } from "react-redux"
import { mapActionToProps, mapDispatchToProps } from "./mapStore"
import {withRouter} from "react-router-dom"
@withRouter

@connect(mapActionToProps, mapDispatchToProps)


class Find extends Component {
    render() {
        let { searchVal, find } = this.props
        // console.log(this.props.find, 111)
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
                        {
                            find.map((item, index) => (
                                <div className="find-list" key={index} onClick={this.handleToSearch.bind(this,item)}>
                                    <a>{item.name}</a>
                                    <span>约{item.productCount}件商品</span>
                                </div>
                            ))
                        }

                    </div>
                </Main>
            </PageContainer>
        )
    }
    handleGetValue(e) {
        let val = e.target.value;
        // dispatch(TitleAction(val))
        this.props.handleAsyncFind(val)
        // console.log(val)
    }
    handleToSearch(item){
        this.props.history.push("/searchlist?q="+item.name+"&secondCategoryId="+item.category2Id)
    }
    //onChange={this.handleGetValue.bind(this)}
    // componentDidMount(){

    //     this.props.handleAsyncFind()
    // }

}

export default Find