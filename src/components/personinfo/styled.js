import styled from "styled-components"

export const Main=styled.div`
    // overflow-y:auto;
    .topbar{
        height:0.43rem;
        position:relative;
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
        justify-content:space-between;
        background-color:hsla(0,0%,100%,0.95);
    }
.top_left,.top_right{
    width:0.51rem;
    height:0.43rem;
    position:relative;
    z-index:10;
}
.back,.show-menu{
    width:100%;
    height:100%;
    display:block;
    position:relative;
}
.mei-arrow,.mei-dot{
    display: block;
    width: 0.22rem;
    height: .15rem;
    position: absolute;
    left: 0.15rem;
    top: .15rem;
    color: #222;
    font-size: .14rem;
    background:pink;
}
.top_title{
    position:relative;
    z-index:10;
    width:2.65rem;
    height:0.43rem;
    background:pink;
    // margin-left:-0.5rem;
    span{
        display:block;
        width:2.65rem;
        height:0.43rem;
        font-size:0.16rem;
        line-height:0.43rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        text-transform:uppercase;
        text-align:center;
        position:absolute；
        top:0;
        left:-0.2rem;
    }
}

.baseinfo{
    width:3.26rem;
    height:0.94rem;
    border:0.01rem solid #000;
    border-top:0
    padding:0.1rem 0 0.2rem;
    margin:0 auto;
    box-shadow:0 0.01rem 0 0 #000;
    .avatar{
        float:left;
        margin-left:0.15rem;
        width:0.6rem;
        height:0.6rem;
        border-radius:0.6rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .username{
        width:1.26rem;
        height:0.7rem;
        display:flex;
        flex-direction:column;
        // background:red;
        float:left;
        padding-top:0.08rem;
    }
}
.nickname{
    display:block;
    padding-bottom:0.1rem;
    color:#000;
    font-size:0.21rem;
}
.to-personalinfo{
    color:#999;
    font-size:0.14rem;
}


.order{
    border:0.01rem solid #000;
    width:3.25rem;
    height:1.1rem;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    box-shadow:0 0.01rem 0 0 #000;
    .link{
        display:block;
        width:50%;
        height:1rem;
        color:#000;
        span{
            display:flex;
            height:0.5rem;
            margin:0.25rem 0;
            text-align:center;
            font-size:0.14rem;
            flex-direction:column;
            justify-content：center;
            
        }
    }
}
.wei{
    border-right:1px solid #eee;
    box-shadow:1px 0 0 0 #eee;
}

strong{
    display:block;
    padding-bottom:0.15rem;
    font-size:0.28rem;
}
.nav{
    width:100%;
    height:100%;
}

.quick-link{
    border-bottom: 0.005rem solid rgba(0,0,0,.1);
    width: 3.25rem;
    margin: 0 auto;
    box-shadow: 0 0.01rem 0 0 rgba(0,0,0,.1);
    position: relative;
}
.quick-nav{
    width: 100%;
    display:flex;
    padding: .25rem 0;
    justify-content:space-between;
    span{
        font-size:0.17rem;
        color:#000;
    }
    i{
        padding: 0 .1rem 0 0;
        font-size: 0.1rem;
        font-style: normal;
        color: #999;
        font-weight: 500;
        background:pink;
        width:0.1rem;
        height:0.1rem;

    }
    em{
        float: right;
        padding: 0 0.1rem 0 0;
        font-size: 0.14rem;
        font-style: normal;
        color: #999;
        margin-left:1.4rem;
    }
}
`