import styled from "styled-components";


export const Conatiner = styled.div`
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    width:100%;
    height:0.9rem;
    font-size:0.01rem;
    background:#333;
    // overflow:hidden;
        .homeTop{
            height:0.45rem;
            margin: 0 auto;
            ul{
                display:flex;
                flex-direction: row;
                width: 100%;
                height: 100%;
            }
        }
    .homeTop_list1{
        text-align: left;
        width: 0.57rem;
        height:0.43rem;
        box-sizing: border-box;
        position: relative;
    }    
    .head-img{
        width: .33rem;
        height:0.29rem;
        display: block;
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
        padding:0.025rem 0.05rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .search{
        float: left;
        text-align: center;
        width:2.67rem;
        height:0.43rem;
        line-height: 0.43rem;
        position: relative;
        a{
            display: inline-block;
            width: 2.67rem;
            height: 0.34rem;
            overflow: hidden;
            margin-top: 0.07rem;
            strong{
                max-width: 1.67rem;
                // overflow: hidden;
                display: inline-block;
                vertical-align: top;
                line-height: 0.34rem;
                font-weight: 400;
                font-size: .16rem;
            }
        }
    }
    .mei-search{
        padding-right:0.1rem;
        font-size:0.2rem;
        color:#fff;
        font-family:iconfont!important;
        font-style:normal;
    }
    .homeTop_list3{
        float: right;
        text-align: right;
        width: 0.49rem;
        height:0.43rem;
        a{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .shopCarIcon{
        width: .2rem;
        height:.24rem;
        display: block;
        background:pink;
        margin-top:0.1rem;
    }
.Menu{
    height:0.43rem;
    width: 100%;
    margin: 0 auto;
    overflow-x:auto;
    div{
        width:100%;
        height: 0.43rem;
        margin: 0 auto;
        padding-left:0.02rem;
        box-sizing: border-box;
        ul{
            height:0.43rem;
            font-size:0.1rem;
            width:5rem;
            display: flex;
            justify-content: space-between;
        }
    }
    .Menubar{
        text-align: center;
        height:0.43rem;
        line-height: 0.43rem;
        position: relative;
        box-sizing: border-box;
        padding-left:0.1rem;
        float: left;
        span{
        color:#fff;
        font-size:0.16rem;
        }
    }
}
`

// export const Main = styled.div`
//     background: #fff;
//     height:4.5rem;
//     background:#d8d8d8;
// .swiper-container {
//     height:100%;
//     margin-left: auto;
//     margin-right: auto;
//     position: relative;
//     // overflow: hidden;
//     z-index: 1;
// }
// .swiper-wrapper {
//     position: relative;
//     width: 100%;
//     height: 100%;
//     z-index: 1;
//     display: flex;
//     transition-property: transform;
//     box-sizing: content-box;
// }
// .swiper-slide{
//     width: 100%;
//     height: 100%;
//     z-index: 1;
//     position: relative;
//     box-sizing: border-box;
//     flex-shrink: 0;
// }
// .banner-item{
//     width: 100%;
//     height: 100%;
//     // overflow: hidden;
//     display: block;
//     position: relative;
//     img{
//         width: 100%;
//         display: block;
//     }
// }
// .banner-slogan{
//     width: 100%;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     flex-direction: column;
//     position: absolute;
//     left: 0;
//     color: #fff;
//     bottom: 0.45rem;
//     strong{
//         margin-bottom: 0.03rem;
//         line-height: .31rem;
//         font-size: 0.3rem;
//         font-weight: 700;
//     }
//     span{
//         line-height:0.21rem;
//         font-size:0.19rem;
//     }
//     p{
//         font-size:0.15rem;
//     }
// }



// `

// export const Every = styled.div`
// /* height:100%; */
// .NewArrivalEnter{
//     padding-left: 0.15rem;
//     padding-right: .15rem;
//     display: flex;
//     justify-content: space-between;
// }
// .block{
//     width: 1.71rem;
//     height: 1.6rem;
//     position: relative;
//     margin:0.08rem;
//     float:left;
// }
// .link{
//     display:block;
// }
// .title{
//     margin: .12rem .1rem 0;
//     display: flex;
//     align-items: center;
//     position:relative;
//     .title-text{
//         font-weight: 700;
//         letter-spacing: 0;
//         font-size: .14rem;
       
//         color: #111;
//         height: 0.22rem;
//         line-height: 0.22rem;
//     }
//     .title-time{
//         height: .12rem;
//         font-size: .12rem;
//         color: #666;
//         line-height: .12rem;
//         margin-left: .05rem;
//         font-weight: 700;
//         letter-spacing: 0;
//     }
// }
// .items{
//     margin: 0 .1rem .16rem;
//     display: flex;
//     justify-content: space-between;
//     .item{
//         width: 0.7rem;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         .item-image{
//             width:0.7rem;
//             height:0.94rem;
//             img{
//                 width:100%;
//                 height:100%;
//             }
//         }
//         .item-tag{
//             font-size: .12rem;
//             box-sizing: border-box;
//             border: 1px solid hsla(0,0%,7%,.5);
//             color: #111;
//             line-height: .15rem;
//             height: .18rem;
//             padding:0.05rem 0.01rem;
//             margin-top:0.05rem
//         }
//     }

// }

// `




export const Footer = styled.div`
    border-top: .05rem solid #eee;
    width:3.45rem;
    margin: 0.1rem auto 0;
    padding: .1rem 0 0.5rem;
    box-shadow: 0 -0.013333rem 0 0 #ccc;
    .tel{
        display: block;
        padding: .1rem 0 .1rem;
        text-align: center;
        font-size: .15rem;
        letter-spacing: .05rem;
        color: #000;
    }
.fot_nav{
    display: block;
    text-align: center;
    height:0.2rem;

    li{
        vertical-align: top;
       font-size:0.12rem;
       float:left;
       padding:0 0.1rem;
       text-align:center;
        margin-left: .3rem;
        color:#666;
    }
}
.icp{
    padding: .1rem 0; 
    text-align: center;
    font-size: .12rem;
    color: #666;
}
`