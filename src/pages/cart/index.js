import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import Swiper from "../../components/swiper"
const swiperItem=[
    {imgurl:"http://cdn13.mei.com/category/20180823/986a44e1c181049785e89e7d3fcf9bc1ce6dc3676f54cd06.jpg",
    id:1
    },
    {imgurl:"http://cdn13.mei.com/category/20181204/849aaeb0d2c4166a04ebf2a0f49db32fd4fa53a986efd91b.jpg",
    id:2
    },
    {imgurl:"http://cdn13.mei.com/category/20180823/986a44e1c181049785e89e7d3fcf9bc1ce6dc3676f54cd06.jpg",
    id:1
    },
    {imgurl:"http://cdn13.mei.com/category/20181204/849aaeb0d2c4166a04ebf2a0f49db32fd4fa53a986efd91b.jpg",
    id:2
    }
]

class Cart extends Component {
    render() {
        return (
            <PageContainer>
                {/* 数据传进去 */}
                {/* <Swiper swiperItem={swiperItem}></Swiper> */}
            </PageContainer>
        )
    }
}
export default Cart




// const url =require("url") 
// console.log(this.props.location.search)
// //?siloEn=women&eventCode=2121005100000003355&urlkey=2121005100000003355-event
// let {siloEn,eventCode,urlkey}=url.parse(this.props.location.search,true).query
// console.log(siloEn,eventCode,urlkey)