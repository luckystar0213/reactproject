import styled from "styled-components";


export const LoginContent=styled.div`
    width:100%;
    height:5.58rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 0.5rem ;
    img{
        width:1.8rem;
        height:1rem;
        margin:0 auto;
    }
    .contentinput{
        margin:0 auto;
        width:100%;
        height:3rem;
        display:flex;
        flex-direction:column;
        margin-top:0.3rem;
        padding:0 0.6rem;
        .phone_login_input{
            width:100%;
            height:0.42rem;
            font-size:0.15rem;
            color:#ccc;
            padding: 0.12rem 0;
            border: none;
            border-bottom: 0.01rem solid #E7E7E7;
            margin:0.1rem 0;
        }
        .phone_login_button{
            margin:0.3rem 0;
            width: 100%;
            height: 0.4rem;
            border: none;
            border-radius: 0.03rem;
            background: #FF6700;
            color:#fff;
            font-size:0.16rem;
        }
        .active_t{
            color: #999;
            font-size:0.12rem;
            text-align:center;
            text-decoration: underline
        }
    }

    .contentbotton{
        height:2rem;
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        .open_join_tit{
            font-size:0.14rem;
            color: #B8B8B8;
        }
    }

`

