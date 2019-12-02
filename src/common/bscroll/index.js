import React,{Component} from 'react'
import BScroll from "better-scroll"
import {Bswrapper} from "./styled"

export default class BscrollCom extends Component{
    render(){
        return (
            <Bswrapper ref="wrapper"> 
                {this.props.children};
            </Bswrapper>
        )
    }
    componentDidMount(){
        this.scroll=new BScroll(this.refs.wrapper,{
            pullUpLoad:true,//配置上拉加载
            click:true,
            tap:true
        })
    }
    handlepullingUp(){//上拉加载更多
        this.scroll.on("pullingUp",(callback)=>{
            callback();
        })
    }
    handlefinishPullUp(){//防抖（上拉加载更多之后）
        this.scroll.finishPullUp();//关闭上拉告诉better-scroll数据请求完毕
        this.scroll.refresh();
    }
}