import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { Main } from "./styled"
import observer from "utils/observer"
import { withRouter } from "react-router-dom"
@withRouter
class Mine extends Component {
    render() {
        return (
            <PageContainer>
                <Main>
                    <div className="topbar">
                        <div className="top_left">
                            <a className="back">
                                <span className="mei-arrow"></span>
                            </a>
                        </div>
                        <div className="top_title">
                            <span>个人中心</span>
                        </div>
                        <div className="top_right">
                            <a className="show-menu">
                                <span className="iconfont mei-dot"></span>
                            </a>
                        </div>
                    </div>

                    <div className="personal-center">
                        <div className="baseinfo">
                            <div className="avatar">
                                <img src="https://cdn12.mei.com/glamour_default.png@200w_200h_2e_75q" alt="true" />
                            </div>
                            <div className="username">
                               
                              <span className="nickname" ref="petname" onClick={this.handleSend.bind(this)}>幼儿园高帅帅</span>
                        
                                <span className="to-personalinfo" onClick={this.handleTo.bind(this)}>查看并编辑个人资料</span>
                            </div>
                        </div>

                        <div className="order">
                            <a href="#" className="link">
                                <span className="wei">
                                    <strong>0</strong>
                                    未支付订单
                                </span>
                            </a>
                            <a href="#" className="link">
                                <span>
                                    <strong >0</strong>
                                    全部订单
                                </span>
                            </a>
                        </div>


                        <div className="nav">
                            <div className="quick-link">
                                <div className="quick-nav">
                                    <span>魅力社</span>
                                    <i></i>
                                </div>
                            </div>

                            <div className="quick-link">
                                <div className="quick-nav">
                                    <span>我的优惠券</span>
                                    <em>14张优惠券</em>
                                    <i></i>
                                </div>
                            </div>

                            <div className="quick-link">
                                <div className="quick-nav">
                                    <span>我的地址</span>
                                    <i></i>
                                </div>
                            </div>

                            <div className="quick-link">
                                <div className="quick-nav">
                                    <span>联系我们</span>
                                    <i></i>
                                </div>
                            </div>

                            <div className="quick-link">
                                <div className="quick-nav">
                                    <span>退出登录</span>
                                    <i></i>
                                </div>
                            </div>

                        </div>
                    </div>

                </Main>
            </PageContainer>
        )
    }
    handleTo() {
        
       
    }
    handleSend() {
        let petname = this.refs.petname.innerText
        // console.log(petname)
        // 非父子传值
        // observer.$emit("handleSendPerson",petname)
        // this.props.history.push("/personInfo")
        this.props.history.push("/personInfo/"+petname)
    }
    
}


export default Mine 