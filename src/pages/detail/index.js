import React, { Component, Fragment } from 'react'
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { InfoBox, TopMenuBar, CarBarBox } from "./styled"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import ReactSwiperExample from "components/swiper"
import ReactSwiper from 'reactjs-swiper';
const url = require("url")
@withRouter
@connect(mapStateToProps, mapDispatchToProps)

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            colors: '',
            sizes: '',
            colorflag: 0,
            sizeflag: 0,
        }
    }
    render() {
        let { proInfos } = this.props
        let items = proInfos.images;
        // console.log(swiperItem)
        return (

            <InfoBox>
                <TopMenuBar>
                    <div className="topbar">
                        <div className="left">
                            <a className="back">
                                <span className="iconfont icon-xiazai6" onClick={this.handleBack.bind(this)}>返回</span>
                            </a>
                        </div>
                        <div className="title">
                            <span >{proInfos.brand}</span>
                        </div>
                    </div>
                </TopMenuBar>
                <div className="cont" >
                    <div className="product-show-img">
                        <ReactSwiper swiperOptions={items} showPagination items={items} />
                        {/* <div className="product-show-box swiper-container swiper-container-horizontal">
                            <div className="swiper-slide product-image-item" >
                                <img src={proInfos.brandImg} />
                            </div>
                        </div> */}
                    </div>

                    <div className="product-base">
                        <div className="product-title"><h1 >{proInfos.name}</h1></div>
                        <div className="product-price">
                            <del >￥{proInfos.marketPrice}</del>
                            <strong >￥{proInfos.price}</strong>
                            <div className="detail-tags">
                                <span className="new-labels"><a >{proInfos.discount}</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="delivery">
                        <span><em className="iconfont mei-time"></em>{proInfos.deliver_date}</span>
                    </div>
                    <div className="other-info-block">
                        <section><div>
                            <div className="other-info-item">
                                <div className="countdown">
                                    <div className="sec-kill clearfix">
                                        <span className="s-title">闪购</span>
                                        <div className="s-text"><div>
                                            <span>距结束</span>
                                            <span>01</span>
                                            <em>天</em>
                                            <span>11</span>
                                            <em>小时</em>
                                            <span>59</span>
                                            <em>分</em>
                                            <span>19</span>
                                            <em>秒</em>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="other-info-item">
                                <div className="service-labels">
                                    <div className="click-area">
                                        <div className="title">服务</div>
                                        <div className="labels">
                                            {
                                                proInfos.service_labels ? proInfos.service_labels.map((serveItem, index) => (
                                                    <span className="label-item" key={index}><em>{serveItem.label_title}</em></span>
                                                )) : ""
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="other-info-item">
                                <div className="color-size-list">
                                    <div className="color-list">
                                        <div className="click-area clearfix">
                                            <div className="title">颜色</div>
                                            <div className="color">
                                                {
                                                    proInfos.colorGroup ? proInfos.colorGroup.map((colorItem, index) => (
                                                        <span key={colorItem.color} className={this.state.colorflag == index ? 'color-item selected' : 'color-item'} onClick={this.handleAddColor.bind(this, index)}>{colorItem.color}</span>
                                                    )) : ""
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="size-list">
                                        <div className="click-area clearfix">
                                            <div className="title">尺码</div>
                                            <div className="size">
                                                {
                                                    proInfos.size ? proInfos.size.map((sizeItem, index) => (
                                                        <span className={this.state.sizeflag == index ? 'size-item selected' : 'size-item'} key={sizeItem.sizeId} onClick={this.handleAddSize.bind(this, index)}>{sizeItem.sizeId}</span>
                                                    )) : ""
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="block-desc">
                        <h3 className="block-heading">商品详情</h3>
                        <div className="block-info">
                            <div className="images">
                                <div className="pic">
                                    {
                                        proInfos.description ? proInfos.description.product_img1.map((imgitem, index) => (
                                            <img src={imgitem.bigImgUrl} key={index}></img>
                                        )) : ""
                                    }

                                </div>
                                <p className="tip">{proInfos.packageText}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <CarBarBox>
                    <div className="left-area">
                        <div>
                            <a className="shop-car btn-space" onClick={this.handleToCar.bind(this)}>
                                <span className="icon"> </span>
                                <span className="btn-text" >购物袋</span>
                            </a>
                        </div>
                    </div>
                    <div className="submit-btn">
                        <span className="add-to-cart btn-space" onClick={this.handleAddCar.bind(this, proInfos)}>加入购物车</span>
                        <span className="add-to-checkout">立即购买</span>
                    </div>
                </CarBarBox>
            </InfoBox>
        )
    }
    handleAddColor(index, e) {
        let val = e.target.innerText;
        this.setState({
            colors: val,
            colorflag: index
        })

    }
    handleAddSize(index, e) {
        let val = e.target.innerText;
        this.setState({
            sizes: val,
            sizeflag: index
        })

    }
    handleAddCar(proInfos) {
        let secName = proInfos.name;
        let brandName = proInfos.brandName;
        let secId = proInfos.brandId;
        let secPrice = proInfos.price;
        let secColor = this.state.colors;
        let secSize = this.state.sizes;
        let secImg = proInfos.images[0].bigImgUrl;
        let num = 1;
        let flag = true;
        let info = {
            secName,
            secId,
            brandName,
            secPrice,
            secColor,
            secSize,
            secImg,
            num,
            flag
        }
        let sign = true;
        console.log(info)

        let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].secName === info.secName && cart[i].secColor == info.secColor && cart[i].secSize == info.secSize) {
                cart[i].num++;
                sign = false;
            }
        }
        if(sign === true){
            cart.push(info)
        }
        
        localStorage.setItem("cart", JSON.stringify(cart))

    }
    componentDidMount() {
        let { eventCode, productId } = url.parse(this.props.location.search, true).query

        this.props.handleAsyncDetail(eventCode, productId)
    }
    handleBack() {
        this.props.history.goBack()
    }
    handleToCar() {
        this.props.history.push("/cart")
    }

}


export default Detail