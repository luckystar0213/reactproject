import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { CartBox } from "./styled"
import { withRouter } from "react-router-dom"
@withRouter
class Cart extends Component {
    render() {
        let cartlist = JSON.parse(localStorage.getItem("cart"))
        console.log(cartlist)
        return (
            <PageContainer>
                <CartBox>
                    <div className="head">
                        <span>我的购物袋</span><span className="goback"><i className="iconfont">&#xe610;</i></span>
                    </div>
                    <div className="main">
                        {
                             cartlist.map?cartlist.map((item, index) => (
                                <div className="product" key={index}>
                                    <input type="checkbox" />
                                    <img src={item.secImg} />
                                    <div className="info">
                                        <p>{item.secName}</p>
                                        <p>免税价：<span>￥{item.secPrice}</span></p>
                                        <span>{item.secColor}</span>
                                        <span>{item.secSize}</span>
                                    </div>
                                </div>
                            )):''
                        }



                    </div>
                    <div className="complate">
                        <div className="allcheck">
                            <span><input type="checkbox" />全选</span>
                        </div>
                        <div className="money">
                            应付金额：￥3799
                        </div>
                        <div className="sum">
                            去结算(1)
                        </div>
                    </div>
                </CartBox>
            </PageContainer>
        )
    }

}
export default Cart