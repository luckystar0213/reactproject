import React from "react";
import { ProList, TopMenuBar } from "./styled"
import { withRouter } from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from "react-redux"
const url = require("url")

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class ProjectList extends React.Component {
    constructor() {
        super()
        this.state = {
            sort: "ASC"
        }
    }
    render() {
        let { chineseName, eventCode } = url.parse(this.props.location.search, true).query;
        let { productlist } = this.props
        let { sort } = this.state
       
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
                                <li className="current" onClick={this.handleRen.bind(this, eventCode)}>人气</li>
                                <li onClick={this.handleZhe.bind(this, eventCode)}>折扣</li>
                                <li className="price up" onClick={this.handleSort.bind(this, eventCode, sort)}>
                                    <span>价格</span>
                                </li>
                                <li className="filter">筛选</li>
                            </ul>
                        </div>
                    </div>
                </TopMenuBar>
                <div className="pitem">
                    {/* onClick={this.handleClick.bind(this,item)}*/}
                    {
                        productlist.map ? productlist.map((item, index) => (
                            <div className="product-item" key={index} onClick={this.handleClick.bind(this, item, eventCode)}>

                                <div className="pic">
                                    <img alt={item.imageUrl} src={item.imageUrl} />
                                </div>
                                <div className="product-info">
                                    <span className="product-brand">{item.brandName}</span>
                                    <span className="product-name">{item.productName}</span>
                                </div>
                                <div className="product-price-box">
                                    <div>
                                        <span className="product-price">￥{item.price}</span>
                                        <span className="product-price-del">￥{item.marketPrice}</span>
                                    </div>
                                    <div className="discount">{item.discount}折</div>
                                </div>

                            </div>
                        )) : ""
                    }



                </div>
            </ProList>
        )
    }
    componentDidMount() {
        let { eventCode } = url.parse(this.props.location.search, true).query
        this.handleRen(eventCode)
    }
    handleClick(item, eventCode) {
        this.props.history.push("/detail?eventCode=" + eventCode + "&productId=" + item.productId)
    }

    handleBack() {
        this.props.history.goBack()
    }
    handleRen(eventCode) {
        this.props.handelAsyncProListCon(1, eventCode, "", "")
    }
    handleZhe(eventCode) {
        this.props.handelAsyncProListCon(1, eventCode, 1, "ASC")
    }
    handleSort(eventCode, sort) {
        this.props.handelAsyncProListCon(1, eventCode, "", sort)
        if (this.state.sort === "ASC") {
            this.setState({
                sort: "DESC"
            })
        } else {
            this.setState({
                sort: "ASC"
            })
        }

    }
}

export default ProjectList