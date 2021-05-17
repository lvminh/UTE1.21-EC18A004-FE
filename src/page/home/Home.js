import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'
import { useHistory } from 'react-router';

function Home() {
    let router = useHistory()
    return (
        <>
        <div className="cover">
            <div className="rec" />
            <div className="page">
                <Navbar/>
                <div className="main">
                <div className="silder" id="Slider">
                <Slider/>
                </div>
                <div className="regist">
                    <div className="container">
                    <div className="row register">
                        <div className="col-md-6 regist_left">
                        <h3>Do you know?</h3>
                        <p>Our services are more servicing</p>
                        <p><span>1000+</span>customer</p>
                        <div className="button btnreg" onClick={()=> router.push("/regist")}>Regist Now</div>
                        </div>
                        <div className="col-md-6 regist_right">
                        <h4>COVERAGE UP TO 99% COMMUNE'S DISTRICTS</h4>
                        <p>Pick up / delivery goods on 11,000 districts and communes nationwide</p>
                        <h4> FAST DELIVERY WITHOUT DISCUSSION                </h4>
                        <p>Intra-provincial delivery 6-12 hours                </p>
                        <p>Intra-regional communication 24-36h                </p>
                        <p>Inter-domain delivery 48 hours</p>
                        <h4>DELIVERY NETWORK                </h4>
                        <p>Pick up / delivery goods on 11,000 districts and communes nationwide</p>
                        <h4>EXPRESS PAYMENT</h4>
                        <p>Flexible delivery for customers to choose</p>
                        <p>Change delivery address, change collection money, change phone number, change consignee, ...                </p>
                        <h4>FREE MULTIPLE DELIVERY</h4>
                        <h4>PAYMENT ON DELIVERY</h4>
                        <h4>PAYMENT VIA PAYPAL</h4>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="modalOperation">
                    <div className="container">
                    <h3>Modal operation</h3>
                    <div className="row">
                        <div className="col-md-4 modalOperation-child">
                        <div className="modalOperation_img One">
                            <div className="modalOperation_img-child">
                            </div>
                        </div>
                        <div className="modalOperation_decrip">
                            <p>ORDER RECEIVING
                            </p>
                        </div>
                        </div>
                        <div className="col-md-4 modalOperation-child">
                        <div className="modalOperation_img Two">
                            <div className="modalOperation_img-child">
                            </div>
                        </div>
                        <div className="modalOperation_decrip">
                            <p>PICKUP
                            </p>
                        </div>
                        </div>
                        <div className="col-md-4 modalOperation-child">
                        <div className="modalOperation_img Three">
                            <div className="modalOperation_img-child">
                            </div>
                        </div>
                        <div className="modalOperation_decrip">
                            <p>FINISH
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="loyal">
                    <div className="container">
                    <h3>Loyal partner</h3>
                    <div className="row">
                        <div className=" offset-md-2 loyal_card">
                        <div className="row loyal_row">
                            <div className=" loyal_card-child">
                            </div>
                            <div className=" loyal_card-child">
                            </div>
                            <div className=" loyal_card-child">
                            </div>
                            <div className=" loyal_card-child">
                            </div>
                        </div>
                        </div>
                        <div className=" loyal_card">
                        <div className="row loyal_row">
                            <div className=" loyal_card-child">
                            </div>
                            <div className=" loyal_card-child">
                            </div>
                            <div className=" loyal_card-child">
                            </div>
                            <div className=" loyal_card-child">
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer" id="footer">
                    <Footer/>
                </div>
            </div>
            <div className="bot" />
        </div>
        </>
    )
}

export default Home
