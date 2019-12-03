import React, { Component } from 'react'
import { SwiperCon } from "./styled"
import PropTypes from "prop-types";

class Swiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //轮播的长度
            len: 0,
            //swiperContent的宽度（父级）
            swiperContentIw: 0,
            //当前轮播的下标
            currentIndex: 0,
            //无缝轮播的数据（ ）
            newSwiperItem: []
        }
        //记录传入数据的长度：2个图片
        this.state.len = this.props.swiperItem.length;
        //无缝轮播的数据(复制一张图片)   {新的数据}
        this.state.newSwiperItem = [...this.props.swiperItem, this.props.swiperItem[0]]
    }

    render() {
        let { newSwiperItem, swiperContentIw } = this.state;
        // console.log(newSwiperItem)
        return (
            <SwiperCon ref="swiperContainer">
                {/* swiper-content */}
                <ul className="swiper-content" style={{ width: swiperContentIw }} ref="swiperContent">
                    {
                        // 遍历新数据
                        newSwiperItem.map((item, index) => (
                            <li key={index}>
                                <img src={item.imgurl} />
                            </li>
                        ))
                    }
                </ul>
                {/* 圆点 */}
                <ul className="swiper-spot">
                    <li>

                    </li>
                </ul>
            </SwiperCon>
        )
    }
    //操作真实的dom结构
    componentDidMount() {
        this.handleInit();//计算url宽度
        // this.handleTouchStart();
        // this.handleTouchMove();
        // this.handleTouchEnd();
    }
    handleInit() {//计算轮播的宽度
        //一个图片的宽度
        this.iw = this.refs.swiperContainer.offsetWidth;//父级的宽度(swiperContainer)
        //总宽度(ul)
        let width = this.iw * this.state.newSwiperItem.length;
        this.setState({//计算出长度之后，自动轮播
            swiperContentIw: width
        }, () => {
            this.autoplay()
        })
    }
    //轮播原理
    toImg() {
        //动画
        this.refs.swiperContent.style.transition = "left .2s ease-in-out";
        this.refs.swiperContent.style.left = -(this.state.currentIndex * this.iw) + 'px';
    }
    //自动轮播
    autoplay() {
        setInterval(() => {
            /** 
             * 1   2   1(第一张图片)
             * 0   1   2
            */
            if (this.state.currentIndex == this.state.len) {
                this.setState({
                    currentIndex: 1
                })
                //取消动画
                this.refs.swiperContent.style.transition = "none"
                this.refs.swiperContent.style.left = 0;
            } else {
                this.setState({
                    currentIndex: ++this.state.currentIndex
                })
            }
            // this.setState({
            //             currentIndex: ++this.state.currentIndex
            //         })
            //this.toImg();

            //只为让它成为异步
            setTimeout(() => {
                this.toImg();
            }, 0)

        }, 3000);

    }

    //手指事件

    // handleTouchStart() {
    //     this.refs.swiperContent.addEventListener("touchstart", (e) => {
    //         //记录手指按下的位置
    //         this.disx = e.targetTouches[0].clientX;
    //     })
    // }
    // handleTouchMove() {
    //     this.refs.swiperContent.addEventListener("touchmove", (e) => {
    //         e.preventDefault();
    //         //记录移动的位置
    //         let moveX = e.targetTouches[0].clientX;
    //         // console.log(moveX) 左负，右正

    //         //计算差值
    //         this.distanceX = moveX - this.disX;
    //         // //如何检测用户左滑还是右滑
    //         this.refs.swiperContent.style.transition = "none"
    //         if (this.distanceX > 0 && this.state.currentIndex == 0) {//已经到第一张(所以要拉到最后一张图)
    //             this.refs.swiperContent.style.left = -(this.state.len * this.iw) + this.distanceX + 'px';
    //         } else if (this.distanceX < 0 && this.state.currentIndex == this.state.len) {//已经到了最后一张(所以要拉到第一张图)
    //             this.refs.swiperContent.style.left = 0 + this.distanceX + 'px';
    //         } else {
    //             this.refs.swiperContent.style.left = -(this.state.currentIndex * this.iw) + this.distanceX + "px;"
    //         }
    //     })

    //     //记录移动的位置

    // }
    // handleTouchEnd() {
    //     this.refs.swiperContent.addEventListener("touch", (e) => {
    //         if (Math.abs(this.distanceX) > this.disX) {
    //             //进入下一张
    //             if (this.distanceX > 0) {
    //                 this.setState({
    //                     currentIndex: this.state.len - 1
    //                 })
    //                 this.refs.swiperContent.style.left = -(this.state.len * this.iw) + 'px';

    //             } else {
    //                 this.setState({
    //                     currentIndex: -this.state.currentIndex
    //                 })
    //                 this.toImg();
    //             }

    //         } else {
    //             //回弹
    //             if (this.refs.currentIndex == 0) {
    //                 this.refs.swiperContent.style.left = 0;
    //             } else if (this.state.currentIndex == this.state.len) {
    //                 this.refs.swiperContent.style.left= -( this.state.len*this.iw)+'px';
    //             } else {
    //                 this.refs.swiperContent.style.left = (this.state.currentIndex * this.iw) + 'px';
    //             }


    //         }

    //         this.toImg();


    //     })
    // }

}

//边界条件
Swiper.defaultProps = {
    swiperItem: []
}

Swiper.propTypes = {
    swiperItem: PropTypes.array
}
export default Swiper


