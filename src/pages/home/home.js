import '../../assets/css/home.css';
import '../../assets/fonts/themify-icons/themify-icons.css';
import Logo from '../../components/home/navbar/logo';
import Links from '../../components/home/navbar/navLink';
import RedButton from '../../components/home/redButton';
// import {Image} from 'react-native'
function Home() {
    function Submit(message) {
        alert('Submit : ' + message);
    }
    function clickNav(){
        let a=document.querySelector('.nav-link');
        console.log('Okay');
    };

  return (
    <div className="page">
        {/* Header */}
        <div className="header">
             <div className="container-fluid">
                <div className="logo">
                <Logo />
                </div>
                <div className="navlinks">
                    <Links className="nav-link active" name="Customer" link="#"  />
                    <Links className="nav-link" name="Partner" link="#"/>
                    <Links className="nav-link" name="About Us" link="#"/>
                    <Links className="nav-link" name="Account" link="#"/>
                </div>
                <RedButton className="btn-red gonow" name="GoNow"/>
            </div>
        </div>
        {/* Main */}
        <div className="main">
                {/* Slider */}
                <div className="slider">
                    <div className="container row">
                        <div className="slider_decrip col-6 offset-6">
                            <div className="decrip">
                            <h1 className="font-50">Easy-Go</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde rerum maiores libero quis minima doloribus mollitia quas sint, quia sequi ducimus possimus, fugiat distinctio totam.</p>
                            <RedButton className="btn-red des-btn" name={['Show   ', <i className='ti-arrow-right'></i>]}/>
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button className="slider-btn" id="prev"><i className="ti-arrow-left" ></i></button>
                        <button className="slider-btn" id="next"><i className="ti-arrow-right" ></i></button>
                    </div>
                </div>
                <div className="container">
                    {/* About */}
                    <div className="introduce row">
                        <div className='col-6'>
                            <div className="regist">
                                <h1 className='font-50'>Do you know?</h1>
                                <p>Our service are more servicing</p>
                                <p><b className='font-70'>+1000</b> customer</p>
                                <RedButton className="btn-red" name='Regist Now'/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="facilities">
                                <div className="facilities-title">
                                    NETWORK COVERAGE 99 COMMUNE DISTRICTS
                                </div>
                                <div className="facilities-decrip">
                                    Pick up / delivery goods on 11,000 districts and communes nationwide
                                </div>
                                <div className="facilities-title">    
                                    FAST DELIVERY WITHOUT DISCUSSION
                                </div>
                                <div className="facilities-decrip">
                                    <p>Intra-provincial delivery 6-12 hours </p>   
                                    <p>Intra-regional communication 24-36h </p>
                                    <p>Inter-domain delivery 48 hours </p>                            
                                </div>
                                <div className="facilities-title">
                                    EXPRESS PAY PAYMENT
                                </div>
                                <div className="facilities-decrip">
                                Pick up / delivery goods on 11,000 districts and communes nationwide                                </div>
                                <div className="facilities-title">
                                    EXPRESS PAY PAYMENT
                                </div>
                                <div className="facilities-decrip">
                                    <p>Flexible delivery for customers to choose, change</p>
                                    <p>delivery address, change collection money, change</p>
                                    <p>phone number, change consignee, ...</p>
                                </div>
                                <div className="facilities-title">
                                    FREE MULTIPLE DELIVERY
                                </div>
                                <div className="facilities-title">
                                    FREE MONEY COLLECTION
                                </div>
                                <div className="facilities-title">
                                    PAYMENT VIA PAYPAL
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        {/* Modal */}
        <div className="modal">
                    <h1 className="modal-title">Modal Operation</h1>
                    <div className="container">
                        <div className="operation row">
                            <div className="operation-modal col-4">
                                <div className='operation-place one'>
                                    <div className="operation-place-img"></div>
                                </div>
                                <h4>ORDER RECEIVING</h4>
                            </div>
                            <div className="operation-modal col-4">
                                <div className='operation-place two'>
                                    <div className="operation-place-img"></div>
                                </div>
                                <h4>PICKUP</h4>
                            </div>
                            <div className="operation-modal col-4">
                                <div className='operation-place three'>
                                    <div className="operation-place-img"></div>
                                </div>
                                <h4>FINISH</h4>
                            </div>
                        </div>
                    </div>
                    </div>
        {/* Partner */}
        <div className="partner">
                        <h1 className="title">Loyal partner</h1>
                        <div className="container">
                            <div className='row'>
                                <div className="partner-place col-5 offset-1 row">
                                    <div className="partner-item">
                                    </div>
                                    <div className="partner-item"></div>
                                    <div className="partner-item"></div>
                                </div>
                                <div className="partner-place col-5 row">
                                    <div className="partner-item"></div>
                                    <div className="partner-item"></div>
                                    <div className="partner-item"></div>
                                    <div className="partner-item"></div>
                                </div>
                            </div>
                        </div>
                    </div>
        {/* Footer */}
        <div id="footer" className="bg-red">
                    <div className="col-2" id='social'>
                        <h4>Email: EasyGo@gmail.com.vn</h4>
                        <h4>Phone: 0982.682.326</h4>
                        <h4>Address: 1 Vo Van Ngan, Thu Duc City, HCM City</h4>
                        <i className='ti-facebook font-40'></i>
                        <i className='ti-instagram font-40'></i>
                        <i className='ti-twitter font-40'></i>
                    </div>
                    <div className="col-2" id='contact'>
                        <h3>Contact</h3>
                        <div className="field row">
                            <h4>Name:</h4> <input />
                        </div>
                        <div className="field row">
                            <h4>Phone:</h4> <input />
                        </div>
                        <div className="field row">
                            <h4>Email:</h4> <input />
                        </div>
                        <div className="row">
                            <button id='contact-submit' onClick={() => Submit('Hello')}>
                                Submit
                            </button>
                        </div>
                    </div>            
            </div>
    </div>
  );
}

export default Home;
