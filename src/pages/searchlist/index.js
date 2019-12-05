import React, { Component } from 'react'
import { ProList, TopMenuBar } from "./styled"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
const url = require("url")
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class SearchList extends Component {
    render() {
        
        let { q } = url.parse(this.props.location.search, true).query;
        let { searchlist } = this.props
        // console.log(searchlist)
        // console.log(secondCategoryId)
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
                            <span >{q}</span>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="box">
                            <ul >
                                <li className="current" >人气</li>
                                <li >折扣</li>
                                <li className="price up">
                                    <span>价格</span>
                                </li>
                                <li className="filter">筛选</li>
                            </ul>
                        </div>
                    </div>
                </TopMenuBar>
                <div className="pitem">
                    {
                        searchlist.map ? searchlist.map((item, index) => (
                            <div className="product-item" key={index} onClick={this.handleClick.bind(this, item)}>

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
        let { q, secondCategoryId } = url.parse(this.props.location.search, true).query
        
        this.props.handelAsyncSearchListCon(1,q,"","", secondCategoryId)
    }
    handleBack() {
        this.props.history.goBack()
    }
    handleClick(item) {
        this.props.history.push("/detail?eventCode=" + item.ev_code + "&productId=" + item.productId)
    }
}

export default SearchList