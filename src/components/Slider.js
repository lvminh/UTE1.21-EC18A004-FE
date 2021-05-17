import React from 'react'
import image from '../assets/ship.jpg';
import arrow from '../assets/Arrow 1.png';
import arrow2 from '../assets/Arrow 2.png';
import arrowbtn from '../assets/ArrowButton.png';
function Slider() {
    return (
        <>
            <div>
                <img src={image}></img>
            </div>
            <div className="container covr row">
                <div className="col-md-6 offset-md-6 decription">
                    <div className="row">
                        <div className="decrip col-md-8 offset-md-2">
                            <h2>EasyGo</h2>
                            <p>lLorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde rerum maiores libero quis minima doloribus mollitia quas sint, quia sequi ducimus possimus, fugiat distinctio totam.</p>
                            <div className="button show">
                                Show
                                <div className="arrow">
                                    <img src={arrowbtn}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="btnpage">
                    <div className="btnprev">
                        <img src={arrow}></img>
                    </div>
                    <div className="btnnext">
                        <img src={arrow2}></img>
                    </div>
            </div>
        </>
    )
}

export default Slider
