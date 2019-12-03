import React, { Component } from 'react'
import { connect } from "react-redux"
import {withRouter,Link} from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
const url =require("url") 
@withRouter
@connect(mapStateToProps, mapDispatchToProps)

class ProListCon extends Component {

    render() {
        let {eventCode}=url.parse(this.props.location.search,true).query
        let { productlist } = this.props
        // console.log(productlist)
        return (
            <div className="pitem">
{/* onClick={this.handleClick.bind(this,item)}*/}
                {
                    productlist.map?productlist.map((item, index) => (
                        <div className="product-item" key={index} onClick={this.handleClick.bind(this,item,eventCode)}>

                                <div className="pic">
                                    <img alt={item.imageUrl} src={item.imageUrl} />
                                </div>
                                <div className="product-info">
                                    <span className="product-brand">{item.brandName}</span>
                                    <span className="product-name">{item.productName}</span>
                                </div>
                                <div className="product-price-box">
                                    <div><span className="product-price">{item.price}</span>
                                        <em>vip</em>
                                        <span className="product-price-vip">{item.marketPrice}</span>
                                    </div>
                                </div>

                        </div>
                    )):""
                } 

              

            </div>
        )
    }
    
    componentDidMount() {
        let {eventCode}=url.parse(this.props.location.search,true).query
        // console.log(siloEn,eventCode,URLKey)
        this.props.handelAsyncProListCon( 1,eventCode,"","");
    }
    handleClick(item,eventCode){
        this.props.history.push("/detail?eventCode="+eventCode+"&productId="+item.productId)
    }
}


export default ProListCon;