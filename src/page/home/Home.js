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
                        <h3>Bạn có biết?</h3>
                        <p>Hệ thống của chúng tôi đang phục vụ cho</p>
                        <p><span>1000+</span>khách hàng</p>
                        <div className="button btnreg" onClick={()=> router.push("/regist")}>Regist Now</div>
                        </div>
                        <div className="col-md-6 regist_right">
                        <h4>BAO PHỦ 99% HUYỆN, XÃ</h4>
                        <p>Nhận / giao hàng tận nơi trên 25 huyện, xã trên toàn quốc</p>
                        <h4> DỊCH VỤ GIAO HÀNG NHANH </h4>
                        <p>Giao hàng nội tỉnh 6-12h</p>
                        <p>Liên lạc nội vùng 24-36h</p>
                        <p>Inter-domain delivery 48 hours</p>
                        <h4>MẠNG LƯỚI GIAO HÀNG</h4>
                        <p>Nhận / giao hàng tận nơi trên 11.000 huyện, xã trên toàn quốc</p>
                        <h4>HỆ THỐNG THANH TOÁN</h4>
                        <p>Giao hàng linh hoạt cho khách hàng lựa chọn</p>
                        <p>Thay đổi địa chỉ giao hàng, đổi tiền thu hộ, đổi số điện thoại, thay đổi người nhận hàng, ...</p>
                        <h4>GIAO HÀNG MIỄN PHÍ NHIỀU LẦN</h4>
                        <h4>THANH TOÁN KHI GIAO HÀNG</h4>
                        <h4>THANH TOÁN QUA PAYPAL</h4>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="modalOperation">
                    <div className="container">
                    <h3>Phương thức hoạt động</h3>
                    <div className="row">
                        <div className="col-md-4 modalOperation-child">
                        <div className="modalOperation_img One">
                            <div className="modalOperation_img-child">
                            </div>
                        </div>
                        <div className="modalOperation_decrip">
                            <p>NHẬN ĐƠN HÀNG
                            </p>
                        </div>
                        </div>
                        <div className="col-md-4 modalOperation-child">
                        <div className="modalOperation_img Two">
                            <div className="modalOperation_img-child">
                            </div>
                        </div>
                        <div className="modalOperation_decrip">
                            <p>GIAO HÀNG
                            </p>
                        </div>
                        </div>
                        <div className="col-md-4 modalOperation-child">
                        <div className="modalOperation_img Three">
                            <div className="modalOperation_img-child">
                            </div>
                        </div>
                        <div className="modalOperation_decrip">
                            <p>KẾT THÚC
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="loyal">
                    <div className="container">
                    <h3>Đối tác</h3>
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
