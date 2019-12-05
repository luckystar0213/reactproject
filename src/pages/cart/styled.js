import styled from "styled-components";


export const CartBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
    .head{
        height: 1rem !important;
        display: flex;
        background: #fff;
        color: #444;
        box-shadow: 0 0 0.1rem #ccc;
        z-index: 1;
        align-items: center;
        position:relative;
            .goback{
                position:absolute;
                left:.2rem;
            i{
                font-size:.2rem;
            }
        }
    }
    .head span{
        margin: auto;
        font-size:.16rem;
        line-height: 1rem;
    }

    .main{
        overflow-y: auto;
        padding-bottom: 1rem;
        margin-top:.44rem;
        .package-item .package-event-item:last-child {
            box-shadow: 0 0 0 0 #ccc;

        }
        .p-item-box{
            width: 100%;
            height: 1.4rem;
            background-color: #fff;
            box-shadow: 0 0.013333rem 0 0 #ccc;
        }
        .p-select, .p-status {
            width: .6rem;
            height: 1.4rem;
            float: left;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .package-item .package-event-p-list:last-child .p-item-box:last-child .p-item {
            border-bottom: none;
            box-shadow: none;
        }
        .p-item{
            width: 3rem;
            height: 1.4rem;
            float: left;
            padding: .12rem 0;
        }
        .p-thumbnail {
            width: 1.2rem;
            height: 1.2rem;
            float: left;
            margin-right: .1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .p-baseinfo{
            width: 1.7rem;
            height: 1.2rem;
            float: left;
            padding: .05rem 0;
            position: relative;
        }
        .p-brand-name{
            padding-bottom: .05rem;
            .p-brand, .p-name {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-bottom: .05rem;
                color: #000;
            }
        }
        .p-name{
            font-size: .15rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .p-price-mkt, .p-size-color, .p-tax {
            color: #999;
            font-size: .15rem;
        }
        .p-price-mkt , .p-size-color , .p-tax  {
            span{
                padding-right: .05rem;
            }

        }
        .p-info-price{
            position: absolute;
            left: 0;
            bottom: .05rem;
        }
        .p-price-reduce, .p-price {
            color: #dd2828;
        }
        .p-brand, .p-price {
            text-transform: uppercase;
            font-size: .18rem;
            font-weight: 700;
        } 
        .p-price-all{
            height: .18rem;
            line-height: .18rem;
            del, span {
                float: left;
                padding-right: .05rem;
            }
        }
        .quantity-box {
            width: .9rem;
            position: absolute;
            right: 0;
            bottom: .05rem;
        }
        .quantity {
            box-shadow: 0.013333rem 0.013333rem 0 0 #ddd, -0.013333rem -0.013333rem 0 0 #ddd;
        }
        .quantity {
            a{
                display: inline-block;
                width: .2rem;
                height: .2rem;
                text-align: center;
                line-height: .2rem;
                color: #000;
                font-size: .2rem;
                font-family: sans-serif;
                vertical-align: top;
            }
            span,a {
                float: left;
            }
            span{
                display: inline-block;
                width: .3rem;
                height: .2rem;
                line-height: .2rem;
                text-align: center;
                color: #000;
                font-size: .15rem;
                vertical-align: top;
            }
        }
        
    }
    .complate{
        height: .5rem;
        background: #fff;
        position: fixed;
        bottom:.5rem;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        box-shadow: 0 0 0.1rem #ccc;

    .sum {
        width: 1rem;
        height: 100%;
        background: #c33;
        color: #fff;
        line-height: .5rem;
        text-align: center;
        float: right;
        position: absolute;
        right: 0;
    }
    .money{
        min-width: 1rem;
        height: 100%;
        line-height: .5rem;
        text-align: center;
        float: right;
        position: absolute;
        right: 1rem;
        padding: 0 .1rem;
        color: red;
    }
    .allcheck{
        width: 1rem;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: .18rem;

        span{
            margin: auto;
        }
        input{
            width: .15rem;
            height: .15rem;
        }
    
    }

}

`

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
        margin-right:1rem
    }
    .back{
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
    
    `