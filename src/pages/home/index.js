import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Conatiner,Footer} from "./styled"
// import EveryHot from "../../components/everyhot"

import {NavLink,Redirect,withRouter} from "react-router-dom"
@withRouter

class Home extends Component {
    render() {
        return (
            <PageContainer>
                {/* header */}
                  <Conatiner className="header-home">
                    <div className="homeTop">
                        <ul >
                            <li className="homeTop_list1">
                                <a href="#" className="iconfont head-img icon-saoma">
                                    
                                </a>
                            </li >
                            <li className="search">
                                <a>
                                    <strong>
                                        <span className="iconfont mei-search">
                                        </span>BALMAIN 最低可至2折
                                    </strong>
                                </a>
                            </li>
                            <li className="homeTop_list3">
                                <a href="#">
                                    <span className="iconfont DianIcon icon-dian"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="Menu">
                        <div className="topMenu">
                            <ul>
                                <li className="Menubar">
                                    <span onClick={this.handleTo1.bind(this)}>
                                        {/* <NavLink to="/home/everyhot">
                                        推荐
                                        </NavLink> */}
                                            推荐
                                        <Redirect from="/home" to="/home/everyhot" />
                                        </span>
                                </li>
                                <li className="Menubar">
                                    <span onClick={this.handleTo2.bind(this)}>
                                    海外
                                    {/* <NavLink to="/home/crossborder">
                                            海外
                                    </NavLink> */}
                                        </span>
                                </li>
                                <li className="Menubar">
                                    <span onClick={this.handleTo3.bind(this)}>
                                    女士 
                                    {/* <NavLink to="/home/women">女士 </NavLink>*/}
                                </span> 
                                </li>
                                <li className="Menubar">
                                    <span>男士</span>
                                </li>
                                <li className="Menubar">
                                    <span >美妆</span>
                                </li>
                                <li className="Menubar">
                                    <span >家居</span>
                                </li>
                                <li className="Menubar">
                                    <span >婴童</span>
                                </li>
                                <li className="Menubar">
                                    <span >即将上新</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Conatiner>
               
                {/* <EveryHot/> */}

{/* 
                 <Footer>
                    <a className="tel">400&nbsp;-&nbsp;664&nbsp;-&nbsp;6698</a>
                    <ul className="fot_nav">
                        <li>首页</li>
                        <li>客户端</li>
                        <li>登录</li>
                        <li>注册</li>
                    </ul>
                    <p className="icp">浙ICP备16004860号-1</p>
                </Footer>  */}
            </PageContainer>
        )
    }
    handleTo1(){
        this.props.history.push("/home/everyhot");
    }
    handleTo2(){
        this.props.history.push("/home/crossborder");
    }
    handleTo3(){
        this.props.history.push("/home/women");
    }
}


export default Home 
