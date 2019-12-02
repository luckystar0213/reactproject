import styled from "styled-components";

export const Main = styled.div`
    background: #fff;
    height:4.5rem;
    background:#d8d8d8;
.swiper-container {
    height:100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    // overflow: hidden;
    z-index: 1;
}
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
}
.swiper-slide{
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
}
.banner-item{
    width: 100%;
    height: 100%;
    // overflow: hidden;
    display: block;
    position: relative;
    img{
        width: 100%;
        display: block;
    }
}
.banner-slogan{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 0;
    color: #fff;
    bottom: 0.45rem;
    strong{
        margin-bottom: 0.03rem;
        line-height: .31rem;
        font-size: 0.3rem;
        font-weight: 700;
    }
    span{
        line-height:0.21rem;
        font-size:0.19rem;
    }
    p{
        font-size:0.15rem;
    }
}

`
export const Hot = styled.div`
    position:relative;
    margin:0.1rem 0.15rem 0;
.hot_container{
    margin-top: .1rem;
    padding-top:0.1rem;
    width: 100%;
    .item{
        width:3.45;
        height: 2.07rem;
        margin: 0 auto .1rem;
        position: relative;
        .event-item-img{
            width:3.45;
            height: 2.07rem;
            img{
                width:100%;height:100%;
            }
        }
    }
}
.event-info{
    width: 3.45rem;
height: 1.03rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-content: flex-end;
align-items: flex-end;
position: absolute;
left: 0;
bottom: 0;
    // background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.55));
}
.event-base{
    padding-bottom: .05rem;
    width: 100%;
    height: auto;
    padding-left: 0.1rem;
    text-align: left;
 color:#fff;
    span{
        display: block;
        margin-bottom: .05rem;
    }
}
.event-brand{
    text-transform: uppercase;
    line-height: .16rem;
    font-size: .16rem;
}
.event-name,.event-discount{
    height: .14rem;
    line-height: .14rem;
    font-size: .14rem;
}
.more_box{
    margin-top:0.05rem;
    width:100%;
    height:1.02rem;
}
.more_img{
    width:1.7rem;
    height:1.02rem;
    float:left;
    background:red;
}
.img2{
    margin-left:0.02rem;
}

`

