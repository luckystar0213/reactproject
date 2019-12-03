import React from "react";
import { ProList, TopMenuBar } from "./styled"
import ProListCon from "components/prolistcon"
import { withRouter } from "react-router-dom"
const url = require("url")
@withRouter
class ProjectList extends React.Component {
    render() {
        let { chineseName } = url.parse(this.props.location.search, true).query;
        // console.log(chineseName)
        return (
            <ProList>
                <TopMenuBar>
                    <div className="topbar">
                        <div className="left">
                            <a className="back">
                                <span className="iconfont icon-xiazai6" onClick={this.handleBack.bind(this)}>返回</span>
                            </a>
                        </div>
                        <div className="title">
                            <span >{chineseName}</span>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="box">
                            <ul >
                                <li className="current">人气</li>
                                <li >折扣</li>
                                <li className="price up">
                                    <span>价格</span>
                                </li>
                                <li className="filter">筛选</li>
                            </ul>
                        </div>
                    </div>
                </TopMenuBar>
                <ProListCon />
            </ProList>
        )
    }
    handleBack() {
        this.props.history.goBack()
    }
}

export default ProjectList