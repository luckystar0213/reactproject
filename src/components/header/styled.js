import styled from "styled-components";

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

