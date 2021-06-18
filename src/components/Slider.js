import React from 'react'
import image from '../assets/ship.jpg';
import arrow from '../assets/Arrow 1.png';
import arrow2 from '../assets/Arrow 2.png';
import arrowbtn from '../assets/ArrowButton.png';
function Slider() {
    return (
        <>
            <div>
                <img src={image} alt='ship'></img>
            </div>
            <div className="container covr row">
                <div className="col-md-6 offset-md-6 decription">
                    <div className="row">
                        <div className="decrip col-md-8 offset-md-2">
                            <h2>EasyGo</h2>
                            <p>Một hệ thống giao hàng đạt chuẩn với chất lượng quốc tế. Với sự liên kết cùng các đơn vị giao hàng hứa hẹn sẽ mang đến cho bạn một trải nghiệm giao hàng tuyệt với.</p>
                            <div className="button show">
                                Chi tiết
                                <div className="arrow">
                                    <img src={arrowbtn} alt='arrow'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="btnpage">
                    <div className="btnprev">
                        <img src={arrow} alt='arrowprev'></img>
                    </div>
                    <div className="btnnext">
                        <img src={arrow2} alt='arrownext'></img>
                    </div>
            </div>
        </>
    )
}

export default Slider
