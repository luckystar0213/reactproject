import React, { Component } from 'react'
import { LoginContent } from "./styled"
// import { connect } from "react-redux"
import { loginApi } from "../../api/home"
import { withRouter } from "react-router-dom";
@withRouter
// @connect(mapStateToProps, mapDispatchToProps)

class Login extends Component {
    render() {
        console.log(this.props.login, 'sudes')
        return (
            <div>
                <LoginContent>
                    <img src="http://www.rayootech.com/images/ecom/k3.png" alt="ssss" />
                    <div className="contentinput">
                        <input type="text" name="tel" className="phone_login_input" placeholder="手机账号" ref="name" />
                        <input type="password" name="password" className="phone_login_input" placeholder="用户密码" ref="pwd" />
                        <button className="phone_login_button" onClick={this.handleLogin.bind(this)}>登 录</button>
                        <span className="active_t" >手机验证码快捷登录</span>
                    </div>
                    <div className="contentbotton">
                        <span className="open_join_tit">更多快捷登录/注册</span>
                    </div>
                </LoginContent>
            </div>
        )
    }
    async handleLogin() {
        let username = this.refs.name.value;
        let password = this.refs.pwd.value;
        let data = await loginApi(username, password)
        console.log(data.data.data)
        if (data.code === 200) {
            alert("登录成功") 
            let path = this.props.location.params ? this.props.location.params.from : '/home';
            localStorage.setItem("userInfo",JSON.stringify({
                id:data.data.data._id,
                name:data.data.data.name,
                urlPic:data.data.data.urlPic,
                
            }))
            this.props.history.push(path)
        } else {
            alert("登陆失败")
        }
    }

}
export default Login
//搜索
// export const FindAction=(text)=>{

//     return async(dispatch)=>{
//         let data=await loginApi(text)
//         // console.log(data)

//     }
// }
