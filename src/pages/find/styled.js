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
        /* margin-bottom:0.16rem; */
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
    height:0.3rem;
   border-bottom:#ccc;
}

.find-list{
    width:100%;
    padding:0.1rem 0.2rem 0 .23rem;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;//换行
    align-content:space-between;
    /* // 行与行之间对齐方式 */
    a{
       display:inline-block;
       width: 80%;
       height:.3rem;
       margin-bottom:0.13rem;
       /* text-align:center; */
       line-height:0.35rem;
       color:#000;
       font-size:0.14rem;   
    }
    span{
           width:20%;
           height:100%;
           margin-top:0.08rem;
           color:#999;
           font-size:0.05rem;
           display:flex;
           overflow:hidden;
           white-space:nowrap;//文本不换行
           text-overflow:ellipsis;
       }
}
`
