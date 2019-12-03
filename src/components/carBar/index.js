import React, { Fragment } from "react";
import { CarBarBox } from "./styled";

class CarBar extends React.Component {
    render() {
        return (
            <Fragment>
                <CarBarBox>
                    <div className="left-area">
                        <div>
                            <a href="#" className="shop-car btn-space">
                                <span className="icon"> </span>
                                <span className="btn-text">购物袋</span>
                            </a>
                        </div>
                    </div>
                    <div className="submit-btn">
                        <span className="add-to-cart btn-space" onClick={this.handelAddCar.bind(this)}>加入购物车</span>
                        <span className="add-to-checkout">立即购买</span>
                    </div>
                </CarBarBox>
            </Fragment>
        )
    }
}

export default CarBar;
