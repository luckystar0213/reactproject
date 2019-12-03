import React, { Component, Fragment } from 'react'
import { Main, Hot } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)


class Women extends Component {
    render() {
        console.log(this.props, 444)
        let { women } = this.props
        return (
            <Fragment>
                <Main className="home" >
                    <div className="swiper-container">
                        <div className="swiper-wrapper ">
                            <div className="swiper-slide">
                                <a href="#" className="external banner-item">
                                    <img src="http://cdn13.mei.com/category/20180823/986a44e1c181049785e89e7d3fcf9bc1ce6dc3676f54cd06.jpg" alt="" />
                                    <div className="banner-slogan">
                                        <div className="banner-label"></div>
                                        <strong>新人福利专区</strong>
                                        <span>  ¥4800 新客专享优惠券</span>
                                        <p>点击使用</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Main>
                <Hot>
                    {
                        women.map((item, index) => (
                            <div className="hot_container" key={index} onClick={this.handleProList.bind(this, item)}>
                                <div className="item">
                                    <div className="event-item-img">
                                        <img src={item.imageUrl} />
                                    </div>
                                    <div className="event-info">
                                        <div className="event-base">
                                            <span className="event-brand">{item.englishName}</span>
                                            <span className="event-name">{item.chineseName}</span>
                                            <span className="event-discount">{item.discountText}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </Hot>

            </Fragment>
        )
    }
    componentDidMount() {
        this.props.handleAsyncWomen()
    }
    handleProList(item) {
        this.props.history.push("/productlist?siloEn=" + item.siloEn + "&eventCode=" +
            item.eventId + "&URLKey=" + item.urlkey + "&chineseName=" + item.chineseName)
    }
}

export default Women

