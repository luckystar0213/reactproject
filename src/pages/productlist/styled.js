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