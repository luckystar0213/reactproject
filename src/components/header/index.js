import React, { Fragment } from "react";
import { TopMenuBar } from "./styled";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Header extends React.Component {
    constructor(){
        super();
        
    }
    render() {
        return (
            <Fragment>
                <TopMenuBar>
                    <div className="topbar">
                        <div className="left">
                            <a className="back">
                                <span className="iconfont icon-xiazai6" onClick={this.handleBack.bind(this)}>返回</span>
                            </a>
                        </div>
                        <div className="title">
                            <span >不一样的优雅婉约</span>
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
            </Fragment>
        )
    }
    handleBack(){
        this.props.history.goBack()
    }

    componentDidMount(){
        
    }

}

export default Header;