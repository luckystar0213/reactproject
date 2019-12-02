import styled from "styled-components";

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