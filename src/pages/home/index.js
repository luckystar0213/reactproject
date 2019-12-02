import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {withRouter} from "react-router-dom"
@withRouter
class Home extends Component {
    render() {
        return (
            <PageContainer>
                <div onClick={this.handleClick.bind(this)}>点击跳转到列表</div>
            </PageContainer>
        )
    }

    handleClick(){
        this.props.history.push("/productlist")
    }
}

export default Home;