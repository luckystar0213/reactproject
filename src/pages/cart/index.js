import React, { Component } from 'react'
import {PageContainer} from "common/styled"

import {withRouter} from "react-router-dom"
@withRouter
class Cart extends Component {
    render() {
        const url =require("url") 
        console.log(this.props.location.search)
        //?siloEn=women&eventCode=2121005100000003355&urlkey=2121005100000003355-event
        let {siloEn,eventCode,urlkey}=url.parse(this.props.location.search,true).query
        console.log(siloEn,eventCode,urlkey)
        return (
            <PageContainer>
                Cart
            </PageContainer>
        )
    }
}
export default Cart