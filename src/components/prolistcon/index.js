import React, { Component } from 'react'
import { connect } from "react-redux"
import {withRouter,Link} from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"

@withRouter
@connect(mapStateToProps, mapDispatchToProps)

class ProListCon extends Component {
    render() {
        
        let { productlist } = this.props
        console.log(productlist)
        return (
            <div className="pitem">
{/* onClick={this.handleClick.bind(this,item)}*/}
                {
                    productlist.map?productlist.map((item, index) => (
                        <Link className="product-item" key={index} to={"/detail/"+item.glsCode+"/"+item.productName}>

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

                        </Link>
                    )):""
                } 

              

            </div>
        )
    }
    
  
    componentDidMount() {
        this.props.handelAsyncProListCon( 1,"2041204190000007411","","","1575273967360","95068dd14ced4eb7611cfd5c4cb930a7");
    }
    handleClick(item){
        this.props.history.push("/detail?glsCode="+item.glsCode)
    }
}


export default ProListCon;