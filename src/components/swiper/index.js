import ReactSwiper from 'reactjs-swiper';
import React, { PureComponent } from 'react'
import {SwiperCon} from "./styled"
class ReactSwiperExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            swiperOptions: {
                preloadImages: true,
                autoplay: 3000,
                showPagination: true,
                loop: true,
                autoplayDisableOnInteraction: false
            },
            items: [
                {
                    id: 1,
                    image: "http://cdn13.mei.com/category/20180823/986a44e1c181049785e89e7d3fcf9bc1ce6dc3676f54cd06.jpg",

                },
                {
                    id: 2,
                    image: " http://cdn13.mei.com/category/20181204/849aaeb0d2c4166a04ebf2a0f49db32fd4fa53a986efd91b.jpg",

                },
                {
                    id: 3,
                    image: "http://cdn13.mei.com/category/20180823/986a44e1c181049785e89e7d3fcf9bc1ce6dc3676f54cd06.jpg",

                },
                {
                    id: 4,
                    image: "http://cdn13.mei.com/category/20181204/849aaeb0d2c4166a04ebf2a0f49db32fd4fa53a986efd91b.jpg",

                },
                {
                    id: 5,
                    image: " http://cdn13.mei.com/category/20180823/986a44e1c181049785e89e7d3fcf9bc1ce6dc3676f54cd06.jpg",

                },
            ]
        }
    }


    render() {
        let { swiperOptions } = this.state
        console.log(swiperOptions)
        return (
            <SwiperCon>
            <div className="swiper_box">
                <ReactSwiper options={swiperOptions} showPagination items={this.state.items} className="swiper-example" ></ReactSwiper>
                <ul className="swiper_content" >
          {/* {
            this.state.items.map((item,index) => {
              return(
                <li key={index}>
                  <img src={item.image} alt=""/>
                </li>
              )
              
            })
          } */}
        </ul>
            </div>
            </SwiperCon>
        )
    }
}

export default ReactSwiperExample;