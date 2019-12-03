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

        .product{
            height:1.4rem;
            display: flex;
            align-items: center;
            padding:0 .15rem ;
            border-bottom: 1px solid #aaa;
            background: #fff;

            img{
                height: .8rem;
                width: .8rem;
                margin: 0.1rem;
            }
            input{
                width: .18rem;
                height: .18rem;
            }
            .info{
                width: 2.5rem;
                font-size: .15rem;

                p:nth-child(1){
                    color: #333;
                font-size:.14rem;
                }
                p{
                    margin-bottom: .05rem;
                    font-size:.13rem;
                }
                p:nth-child(2) span{
                    color: #c33;
                font-weight: bolder;
                }
                s {
                    color: #999;
                    margin-bottom: .05rem;
                    font-size:.11rem
                    }
                button{
                    width: .18rem;
                    height: .18rem;
                    font-size: .18rem;
                    line-height:.18rem;
                }
                .btn{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: .1rem 0;

                    input{
                        font-size: .15rem;
                        text-align: center;
                        width:.25rem;
                        }
                    }
                .btn2{
                    display: flex;
                    align-items: center;
                }
            
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
        line-height: 1. 5rem;
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