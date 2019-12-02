import React, { Component } from 'react'
import {LoginContent} from "./styled"
export default class Login extends Component {
    render() {
        return (
            <div>
                <LoginContent>
                        <img src="http://www.rayootech.com/images/ecom/k3.png" alt="ssss"/>
                        <div className="contentinput">
                            <input type="text" name="tel" className="phone_login_input" placeholder="手机账号" />
                            <input type="password" name="password" className="phone_login_input" placeholder="用户密码" />
                            <button className="phone_login_button">登 录</button>
                            <span className="active_t" >手机验证码快捷登录</span>
                        </div>
                        <div className="contentbotton">
                            <span className="open_join_tit">更多快捷登录/注册</span>
                        </div>
                    </LoginContent>
            </div>
        )
    }
}
