import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { CartBox, TopMenuBar } from "./styled"
import { withRouter } from "react-router-dom"
@withRouter
class Cart extends Component {
    constructor() {
        super();
        this.state = {
            total: "0.0",
            num: "",
            selectAll: true
        }
    }
    render() {
        let { total, selectAll, num } = this.state
        let cartlist = JSON.parse(localStorage.getItem("cart"))
        console.log(cartlist)
        return (
            <PageContainer>
                <CartBox>
                    <TopMenuBar>
                        <div className="topbar">
                            <div className="left">
                                <a className="back">
                                    <span className="iconfont icon-xiazai6" onClick={this.handleBack.bind(this)}>返回</span>
                                </a>
                            </div>
                            <div className="title">
                                <span >购物车</span>
                            </div>
                        </div>
                    </TopMenuBar>
                    <div className="main" ref="main">
                        {
                            cartlist.map ? cartlist.map((item, index) => (
                                <div className="package-event-item" key={index}>
                                    <div className="p-item-box">
                                        <div className="p-select" onChange={this.handleChangeItem.bind(this, item,cartlist)}>
                                            <input type="checkbox" checked={item.flag} className="selector"></input>
                                        </div>
                                        <div className="p-item">
                                            <div className="p-thumbnail">
                                                <a>
                                                    <img src={item.secImg} alt="" />
                                                </a>
                                            </div>
                                            <div className="p-baseinfo">
                                                <div className="p-info-name">
                                                    <div className="p-brand-name">
                                                        <span className="p-brand">{item.brandName}</span>
                                                        <span className="p-name">{item.secName}</span>
                                                    </div>
                                                    <p className="p-size-color">
                                                        <span>{item.secColor}</span>
                                                        <span>{item.secSize}</span>
                                                    </p>
                                                </div>
                                                <div className="p-info-price">
                                                    <div className="p-price-all">
                                                        <span className="p-price">￥{item.secPrice}</span>
                                                    </div>
                                                </div>
                                                <div className="quantity-box">
                                                    <div className="quantity">
                                                        <a className="disabled">-</a>
                                                        <span type="text">{item.num}</span>
                                                        <a className="" onClick={this.handleAdd.bind(this)}>+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) : ''
                        }

                    </div>

                    <div className="complate">
                        <div className="allcheck">
                            <span><input type="checkbox" ref="allCheck" checked={selectAll} onChange={this.handleAll.bind(this)} />全选</span>
                        </div>
                        <div className="money">
                            应付金额：￥{this.state.total}
                        </div>
                        <div className="sum">
                            去结算(1)
                        </div>
                    </div>
                </CartBox>
            </PageContainer>
        )
    }

    handleBack() {
        this.props.history.goBack()
    }
    //全选
    handleAll() {
        this.setState({
            selectAll: !this.state.selectAll
        }, () => {
            let sign = this.refs.allCheck.checked;
            let main = this.refs.main
            for (let i = 0; i < main.children.length; i++) {
                main.children[i].children[0].children[0].children[0].checked = sign
            }
        })
    }
    // 反选
    handleChangeItem(item,cartlist) {
        console.log(cartlist)

    }
    // 商品加
    handleAdd() {
      
    }

}
export default Cart




// const url =require("url") 
// console.log(this.props.location.search)
// //?siloEn=women&eventCode=2121005100000003355&urlkey=2121005100000003355-event
// let {siloEn,eventCode,urlkey}=url.parse(this.props.location.search,true).query
// console.log(siloEn,eventCode,urlkey)