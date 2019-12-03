import styled from "styled-components";

export const ProList = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .pitem{
        margin: 0 auto;
        padding:0 .15rem 2rem;
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
        over-flow-y:auto;
        margin-top:.88rem;
    }
    .product-item{
        margin-right: .15rem;
        position: relative;
        width:1.5rem;
        height: 3.02rem;
        margin-bottom: .26rem;
        a{
            display: block;
            width: 100%;
            color:#222;
        }
        img{
            display: block;
            width: 100%;
        }
        .pic{
            width: 1.5rem;
            height: 2.2rem;
            position: relative;
            img{
                margin-bottom: .13rem;
            }
        }
        .product-info{
            padding-bottom: .067rem;
            span{
                display: block;
                width: 100%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .product-brand{
                text-transform: uppercase;
                font-weight: 700;
                font-size: .14rem;
            }
            .product-name{
                padding: .02rem 0;
                font-size: .14rem;
            }
        }
        .product-price-box{
            display: flex;
            justify-content: space-between;
            span{
                color: #dd2828;
                font-size: .13rem;
                font-weight: 700;
            }
            em{
                width: .5rem;
                height: .2rem;
                color: #dd2828;
                font-size: 12px;
                font-weight: 400;
                margin: .02rem .1rem 0;
                background:#333;
            }
            span.product-price-vip{
                color: #000;
                font-size: .13rem;
            }
        }
    }
`

export const TopMenuBar = styled.div`
        position: fixed;
        padding:0 .15rem;
        background:#fff !important;
        z-index:1000;

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
    }
    
    .menu{
        overflow: hidden;
        width: 100%;
        height: .4rem;
        margin: 0 auto;
        position: relative;
        background: #fff; 
    }
    .box{
        overflow: auto;
        width: 100%;
        height: .4rem;
        margin: 0 auto;
        ul{
            height: .4rem;
            font-size: .14rem;
            width: 100%;
            display: flex;
            justify-content: space-around;
            li{
                text-align: center;
                line-height: .4rem;
                position: relative;
                width: .9rem;
            }
        }
    }
    .current{
        color: #2b2b2b;
        font-weight: 700;
    }
    .filter{
        color: #2b2b2b;
    }
`