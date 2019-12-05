import React, { Component, Fragment } from 'react'
import { Hot, Main, Every } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToprops } from "./mapStore"
import BscrollCom from "../../common/bscroll"
import { withRouter } from "react-router-dom"
import ReactSwiperExample from "../../components/swiper"



// const swiperItem = [
//     {
//         id: 1,
//         bigImgUrl: "http://cdn13.mei.com/category/20180823/986a44e1c181049785e89e7d3fcf9bc1ce6dc3676f54cd06.jpg",

//     },
//     {
//         id: 2,
//         bigImgUrl: " http://cdn13.mei.com/category/20181204/849aaeb0d2c4166a04ebf2a0f49db32fd4fa53a986efd91b.jpg",

//     },
//     {
//         id: 3,
//         bigImgUrl: "http://cdn13.mei.com/category/20180823/986a44e1c181049785e89e7d3fcf9bc1ce6dc3676f54cd06.jpg",

//     },
//     {
//         id: 4,
//         bigImgUrl: "http://cdn13.mei.com/category/20181204/849aaeb0d2c4166a04ebf2a0f49db32fd4fa53a986efd91b.jpg",

//     },
//     {
//         id: 5,
//         bigImgUrl: " http://cdn13.mei.com/category/20180823/986a44e1c181049785e89e7d3fcf9bc1ce6dc3676f54cd06.jpg",

//     },
// ]

@withRouter
@connect(mapStateToProps, mapDispatchToprops)
class EveryHot extends Component {

    render() {
        // console.log(this.props,12)
        let { home } = this.props

        return (
            <Fragment>
                {/* 轮播图 */}
                <Main>
                    <ReactSwiperExample></ReactSwiperExample>
                    {/* <Swiper swiperItem={swiperItem}></Swiper> */}
                </Main>
                <Every className="NewArrivalEnter">
                    <div className="block">
                        <a className="link">
                            <div className="title">
                                <p className="title-text">每日新品</p>
                                <p className="title-time">09:00上新</p>
                            </div>
                            <div className="items">
                                <div className="item">
                                    <div className="item-image">
                                        <img src="https://cdn12.mei.com/product/MC7-145-100007-C/0f2c28537a7df17fd58244fadbe302b1fa22c26591b8d9d2e9f76bf4bb8235e6.jpg@300w_400h_2e_75q" />
                                    </div>
                                    <div className="item-tag">精选新品</div>
                                </div>
                                <div className="item">
                                    <div className="item-image">
                                        <img src="https://cdn15.mei.com/product/MC7-145-100008-C/0f2c28537a7df17f56e3218c461feeef97dcf7d261560658d761c62b2bc61fac.jpg@300w_400h_2e_75q" />
                                    </div>
                                    <div className="item-tag">精选新品</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="block">
                        <a className="link">
                            <div className="title">
                                <p className="title-text">清仓特卖</p>
                                <p className="title-time">周三上新</p>
                            </div>
                            <div className="items">
                                <div className="item">
                                    <div className="item-image">
                                        <img src="https://cdn13.mei.com/product/TWE-112-00414/9c39819b459dbce329edd4f27977f40c.jpg@300w_400h_2e_75q" />
                                    </div>
                                    <div className="item-tag">直降3401元</div>
                                </div>
                                <div className="item">
                                    <div className="item-image">
                                        <img src="https://cdn14.mei.com/product/PT9-2619-100001-C/6ca0e3eed252fb20b2e5532848bc206823a5f7c44b215e0032144a00d8414adb.jpg@300w_400h_2e_75q" />
                                    </div>
                                    <div className="item-tag">直降1201元</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </Every>
                <BscrollCom ref="scroll">
                    <Hot>
                        {
                            home.map((item, index) => (
                                <div key={index}>
                                    <div className="hot_title" >
                                        <h3>{item.name}</h3>
                                    </div>
                                    {
                                        item.events.map((child, index) => (
                                            <div className="hot_container" key={child.categoryId} onClick={this.handleProList.bind(this, child)}>
                                                <div className="item">
                                                    <div className="event-item-img">
                                                        <img src={child.imageUrl} />
                                                    </div>
                                                    <div className="event-info">
                                                        <div className="event-base">
                                                            <span className="event-brand">{child.englishName}</span>
                                                            <span className="event-name">{child.chineseName}</span>
                                                            <span className="event-discount">{child.discountText}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }


                                </div>
                            ))
                        }

                        {/* <div className="hot_title">
                    <h3>更多精彩内容...</h3>
                </div> */}


                    </Hot>
                </BscrollCom>
            </Fragment>
        )
    }
    handleProList(child) {
        this.props.history.push("/productlist?siloEn=" + child.siloEn + "&eventCode=" +
            child.eventId + "&URLKey=" + child.urlkey + "&chineseName=" + child.chineseName)
    }

    componentWillUpdate() {
        this.refs.scroll.handlefinishPullUp();
        // console.log(111)
    }
    componentDidMount() {
        // console.log("componentDidMount", 111)
        // console.log(params,timestamp,summary,111)
        this.props.handleAsyncHot();

        //上拉加载更多
        this.refs.scroll.handlepullingUp(() => {
            this.props.handleAsyncHot();
        })
    }
}

export default EveryHot
