import styled from "styled-components";

export const TopMenuBar = styled.div`
    position: fixed;
    padding:0 .15rem;
    background:#fff !important;
    z-index:1000;
    width:100%;

.topbar{
    width:100%;
    height:.44rem;
    display: flex;
    flex-wrap: nowrap;
    align-items:center;     
}
.left{
    width:.5rem;
    height:.44rem;
    margin-right:.6rem;
}
.back,.switch-menu,.show-menu{
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    span{
        color:#222;
        display: block;
        height: .6rem;
        position: absolute;
        top:.13rem;
        font-size:.14rem;
    }
}
.title{
    position:relative;
    span{
        display: block;
        font-size: .16rem;
        font-weight: 600;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-transform: uppercase;
        text-align: center;
    }
}
.right{
    height:.44rem;     
    .show-menu{
        width:100%;
        height:100%;
        font-size:.14rem;
        border:none;
        outline:none;
        option{
            font-size:12px;
        }
    }
}`

export const InfoBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    
    .cont{
        padding: 0 .2rem .3rem;
        position: relative;
        margin:.44rem 0;
    }
    .product-show-img{
        opacity: 0;
        width: 3.3rem;
        height:3.3rem;
        opacity: 1;
        padding: 0 0 .15rem;
        top:-.44rem;
    }
    .product-show-box{
        box-shadow: 0 0.01rem 0.1rem 0.06rem rgba(0,0,0,.05);
    }
    .swiper-container{
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
    }
    .product-image-item, .product-image-swiper{
        width: 3.3rem;
        height:3.3rem;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        z-index:100;
    }
    .product-image-item{
        img{
            width: 3.3rem;
            overflow: hidden;
            position: absolute;
            box-sizing: border-box;
            
        }
    }
    .product-base{
        width: 100%;
        padding: .15rem  0;
    }
    .product-title{
        padding-bottom: .05rem;
        h1{
            font-size: .18rem;
            color: #000;
        }
    }
    .product-price{
        del{
            display: block;
            margin-bottom: .06rem;
            color: #ccc;
            font-size: .13rem;
        }
        strong{
            display: inline-block;
            margin-right: .1rem;
            color: #dd2828;
            font-size: .16rem;
            font-weight:700;
        }
        .detail-tags{
            display: inline-block;
            vertical-align: text-bottom;
        }
        .labels, .new-labels{
            display: inline-block;
            vertical-align: text-top;
            margin-right: .1rem;
            height: .24rem;
            line-height: .15rem;
            padding: .05rem;
            a{
                background: rgb(255, 255, 255);
                color: rgb(0, 0, 0);
                border: 1px solid rgb(0, 0, 0);
                display: inline-block;
                padding: .02rem;
                font-size:.12rem;
            }
        }
    }
    .delivery{
        padding-bottom: .3rem;
        font-size: .13rem;
        span{
            color: #666;
        }
    }
    .other-info-block{
        padding: 0 0 .1rem;
        section{
            border-top: 1.5px solid #eee;
            border-bottom: 1.5px solid #eee;
        }
        .countdown{
            padding: .2rem 0;
            color: #000;
        }
        .sec-kill{
            font-size: .13rem;
            color: #666;
            .s-title{
                float: left;
            }
            .s-text{
                float: left;
                padding-left: .2rem;
                color: #000;
                font-weight: 700;
                em{
                    font-style: normal;
                    font-weight: 500
                }
            }
        }
        .other-info-item{
            border-bottom: 1px solid #eee;
        }
        .service-labels{
            padding: .2rem 0 .15rem;
            font-size: 14px;
        }
        .click-area{
            display:flex;
            padding-bottom:.15rem;
        }
        .title{
            color: #666;
            font-size:.13rem;
        }
        .labels{
            width:2.8rem;
            padding-left: .1rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        .label-item{
            line-height: .2rem;
            color: #666;
            font-size: .13rem;
            em{
                vertical-align: top;
                padding-bottom: .12rem;
                font-weight: 400;
            }
        }
        .color-list{
            padding-bottom: .1rem;
        }
        .color{
            padding-left: .2rem;
            .color-item {
                margin: 0 .2rem .2rem 0;
                padding:.05rem .1rem;
                text-align: center;
                color: #000;
                font-size: .13rem;
                background-color: #f5f5f5;
            }
            .selected{
            color: #fff;
            background-color: #000;
            
            }
        }
        .size{
            padding-left: .2rem;
            .size-item {
                margin: 0 .2rem .2rem 0;
                padding: .05rem .1rem;
                float: left;
                text-align: center;
                color: #000;
                font-size: .13rem;
                background-color: #f5f5f5;
            }
            .selected{
            color: #fff;
            background-color: #000;
            
            }
        }
        

    }
    .block-desc {
        position: relative;
    }
    .block-heading {
        padding: .3rem 0 .2rem;
        color: #000;
        font-size: .18rem;
        font-weight: 700;
    }
    .block-info{
        padding-bottom: .3rem;
        font-size:12px;
        .pic{
            img{
                display: block;
                width:100%;
            }
        }
    }
    .tip{
            font-size:.13rem;
        }
`

export const CarBarBox = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display:flex;
    justify-content: space-between;
    align-items:center;
    background: #fff;
    width: 100%;
    height: .5rem;
    box-shadow: 0 -0.04rem 0.08rem 0 rgba(0,0,0,.05);
    .left-area{
        width: .6rem;
        .shop-car{
            width: .6rem;
            height: .5rem;
            float: left;
            text-align: center;
            position: relative;
            line-height:.5rem;
            span{
                display: block;
                position: relative;
                color:#666;
                font-size:.12rem;
            }
        }
    }
    .submit-btn{
        width: 4rem;
        height: .5rem;
        font-size: .14rem;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items:center;
        span{
            display: block;
            position: relative;
            width:50%;
            height:.5rem;
            line-height:.5rem;
            text-align:center;
        }
        .add-to-cart{
            color:#222;
            border-left:2px solid #ddd;
            border-right:2px solid #ddd;
        }
        .add-to-checkout{
            color: #dd2828;
        }
    }
    
`