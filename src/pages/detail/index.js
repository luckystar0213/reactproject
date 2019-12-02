import React, { Component, Fragment } from 'react'
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { InfoBox } from "./styled"
import Header from "components/header"
import CarBar from "components/carBar"
import { connect } from "react-redux";
import {withRouter}  from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Detail extends Component {
    render() {
        let { proInfos } = this.props
        console.log(this.props)
        return (

            <InfoBox>
                <Header />
                <div className="cont" >
                    <div className="product-show-img">
                        <div className="product-show-box swiper-container swiper-container-horizontal">
                            <div className="swiper-slide product-image-item" >
                                <img src={proInfos.brandImg} />
                            </div>
                        </div>
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
                                                proInfos.service_labels?proInfos.service_labels.map((serveItem,index)=>(
                                                    <span className="label-item" key={index}><em>{serveItem.label_title}</em></span>
                                                )):""
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
                                                    proInfos.colorGroup?proInfos.colorGroup.map((colorItem,index)=>(
                                                        <span className="color-item normal" key={index}>{colorItem.color}</span>
                                                    )):""
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="size-list">
                                        <div className="click-area clearfix">
                                            <div className="title">尺码</div>
                                            <div className="size">
                                                {
                                                    proInfos.size?proInfos.size.map((sizeItem,index) => (
                                                        <span className="size-item normal" key={index}>{sizeItem.sizeId}</span>
                                                    )):""
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
                                       proInfos.description?proInfos.description.product_img1.map((imgitem,index)=>(
                                            <img src={imgitem.bigImgUrl} key={index}></img>
                                        )):""
                                    }

                                </div>
                                <p className="tip">{proInfos.packageText}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <CarBar />
            </InfoBox>
        )
    }

    componentDidMount() {
        this.props.handleAsyncDetail('2120005100000003137', '2121212199000176808', '1575251094554', 'afa361df2b0c8ea174b99f26cf915463')
    }
}


export default Detail