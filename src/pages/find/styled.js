import styled from "styled-components"

export  const Main=styled.div`
    /* position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background:#fff; */
    ul{ 
        display:flex;
        flex-direction: row;
        width: 100%;
        height: 0.43rem;
        margin-bottom:0.16rem;
        .search_ico{
            width:.35rem;
            height:0.32rem;
            background:pink;
            font-size:0.1rem;
            position:absolute;
            top:0.1rem;
            left:0.2rem;
            float:left;
        }
        .search{
            float: left;
            text-align: center;
            height: 0.32rem;
            line-height: 0.32rem;
            position: relative;
            top:0.1rem;
            left:0.56rem;
            float:left;
            
          
        }
    }
input{
    display:inline-block;
    vertical-align:top;
    padding:0 0.1rem 0 0;
    line-height:0.32rem;
    height:0.32rem;
    font-size:0.2rem;
    background-color:#f5f5f5;
    border:0;
    color:black;
    
}
.remove{
    width:.67rem;
    height: 0.32rem;
    background:red;
    position:relative;
    top:0.1rem;
    right:-0.35rem;
    .del{
        display:block;
        line-height:0.32rem;
        text-align:center;
        color:#000;
        font-size:0.16rem;    
    }
}
.find{
    width:100%;
    height:1.6rem;
    /* background:#ccffll; */
    h3{
        text-indent:0.2rem;
        line-height:0.4rem;
        color:#000;
        font-size:0.22rem;
    }
}

.find-list{
    padding:0.16rem 0.2rem 23rem;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;//换行
    align-content:space-between;
    /* // 行与行之间对齐方式 */
    a{
       display:inline-block;
       width: 1.03rem;
       height:.35rem;
       margin-bottom:0.13rem;
       text-align:center;
       line-height:0.35rem;
       color:#000;
       font-size:0.14rem;
       background:#f5f5f5;
       span{
           width:100%;
           height:100%;
           display:block;
           overflow:hidden;
           white-space:nowrap;//文本不换行
           text-overflow:ellipsis;
       }
    }
}
.history{ 
    /* display:flex; */
    /* background:#ccffll; */
    min-height:0.5rem;
    /* height:100%; */
    h3{
        text-indent:0.2rem;
        line-height:0.25rem;
        height:0.25rem;
        color:#000;
        font-size:0.22rem;
        float:left;
        a{
            margin-left:1.45rem;
            padding:0 0.22rem;
            float:right;
            i{
                color: #999;
                font-size: .16rem;
                background:pink;
                display:block;
                width:0.76rem;
                height:0.25rem;
            }
        }
    }
    
}

`
