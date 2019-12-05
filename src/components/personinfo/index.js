import React, { Component } from 'react'
import {Main} from "./styled"
// import observer from "utils/observer"
import {PwdApi} from "../../api/user"
import {withRouter} from "react-router-dom"
@withRouter

class PersonInfo extends Component {
    constructor(){
        super();
        this.state={
            mineInfo:""
        }
        
        // observer.$on("handleSendPerson",(params)=>{
        //     this.setState({
        //         mineInfo:params
        //     })
        // })
    }
    render() {
        let {petname}=this.props
        return (
            <Main>
                <div className="topbar">
                    <div className="top_left">
                        <a className="back">
                            <span className="mei-arrow icon-fanhui"></span>
                        </a>
                    </div>
                    <div className="top_title">
                        <span>个人中心</span>
                    </div>
                    <div className="top_right">
                        <a className="show-menu">
                            <span className="iconfont mei-dot icon-dian"></span>
                        </a>
                    </div>
                </div>

                <div className="nav">
                    <div className="quick-link">
                        <div className="quick-nav">
                            <span>头像</span>
                            <i></i>
                        </div>
                    </div>

                    <div className="quick-link">
                        <div className="quick-nav">
                            <span >{this.props.match.params.name}</span>
                            <em>14张优惠券</em>
                            <i></i>
                        </div>
                    </div>

                    <div className="quick-link">
                        <div className="quick-nav">
                            <span>性别</span>
                            <i></i>
                        </div>
                    </div>

                    <div className="quick-link">
                        <div className="quick-nav">
                            <span>生日</span>
                            <i></i>
                        </div>
                    </div>

                    <div className="quick-link">
                        <div className="quick-nav">
                            <span>邮箱地址</span>
                            <i></i>
                        </div>
                    </div>
                    <div className="quick-link">
                        <div className="quick-nav">
                            <span onClick={this.handleChangePwd.bind(this)}>修改密码</span>
                            <i></i>
                        </div>
                    </div>

                    <div className="quick-link">
                        <div className="quick-nav">
                            <span onClick={this.handleChangeExit.bind(this)}>退出登录</span>
                            <i></i>
                        </div>
                    </div>
                </div>
            </Main>
        )
    }

    //修改密码
    async handleChangePwd(){
     let userinfo= JSON.parse(localStorage.getItem(("userInfo")))
     let id =userinfo.id
    //  console.log(id)
     let data=await PwdApi(id,123)
    //   console.log(data.data,1234567890)
        alert(data.data.info)
    }
    //退出登录
    handleChangeExit(){
        console.log(12345678) 
        document.cookie =  "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        this.props.history.push("/login")

    }
}

export default PersonInfo 
