import './assets/css/home.css';
import './assets/fonts/themify-icons/themify-icons.css';
import Logo from './components/logo';
import Links from './components/navLink';
import RedButton from './components/redButton';

function Home() {
    function Submit(message) {
        alert('Submit : ' + message);
    }

  return (
    <div className="container">
      {/* Navigator bar */}
      <div className="navbar">
        <Logo />
        <div id="navlinks">
          <Links className="nav-link font-25" name="Customer" link="#"/>
          <Links className="nav-link font-25" name="Partner" link="#"/>
          <Links className="nav-link font-25" name="About Us" link="#"/>
        </div>
        <RedButton className="btn-red gonow" name="GoNow"/>
      </div>
      {/* Main */}
      <div id="main">
        {/* Slider */}
        <div id="slider">
          <div className="description">
            <h1 className="font-50">Easy-Go</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde rerum maiores libero quis minima doloribus mollitia quas sint, quia sequi ducimus possimus, fugiat distinctio totam.</p>
            <RedButton className="btn-red des-btn" name={['Show   ', <i className='ti-arrow-right'></i>]}/>
          </div>
          <button className="slider-btn" id="prev"><i className="ti-arrow-left"></i></button>
          <button className="slider-btn" id="next"><i className="ti-arrow-right"></i></button>
        </div>
        {/* About */}
        <div id="about" className='row'>
            <div className='col-2'>
                <div id="regist">
                    <h1 className='font-40'>Do you know?</h1>
                    <p>Our service are more servicing</p>
                    <p><b className='font-50'>+1000</b> customer</p>
                    <RedButton className="btn-red" name='Regist Now'/>
                </div>
            </div>
            <div className='col-2'>
                <ul id="facilities">
                    <li>NETWORK COVERAGE 99 COMMUNE DISTRICTS
                        <p>Pick up / delivery goods on 11,000 districts and communes nationwide</p>
                    </li>
                    <li>FAST DELIVERY WITHOUT DISCUSSION
                        <p>Intra-provincial delivery 6-12 hours</p>
                        <p>Intra-regional communication 24-36h</p>
                        <p>Inter-domain delivery 48 hours</p>
                    </li>
                    <li>EXPRESS PAYMENT
                        <p>Pick up / delivery goods on 11,000 districts and communes nationwide</p>
                    </li>
                    <li>EXPRESS PAY PAYMENT
                        <p>Flexible delivery for customers to choose, change delivery address, change collection money, change phone number, change consignee, ...</p>
                    </li>
                    <li>FREE MULTIPLE DELIVERY</li>
                    <li>FREE MONEY COLLECTION</li>
                    <li>PAYMENT VIA PAYPAL</li>
                </ul>
            </div>
        </div>
        {/* Modal */}
        <div id="modal" className="bg-red">
          <h1 className="title color-white">Modal Operation</h1>
          <div id="operation">
              <div className="modal">
                  <div className='modal-btn'>
                      <div></div>
                  </div>
                  <h4>ORDER RECEIVING</h4>
              </div>
              <div className="modal">
                  <div className='modal-btn'>
                      <div></div>
                  </div>
                  <h4>PICKUP</h4>
              </div>
              <div className="modal">
                  <div className='modal-btn'>
                      <div></div>
                  </div>
                  <h4>FINISH</h4>
              </div>
          </div>
        </div>
        {/* Partner */}
        <div id="partner">
            <h1 className="title">Loyal partner</h1>
            <div className='row'>
                <div className="partner-container">
                    <div className="partner-item"></div>
                    <div className="partner-item"></div>
                    <div className="partner-item"></div>
                </div>
                <div className="partner-container">
                    <div className="partner-item"></div>
                    <div className="partner-item"></div>
                    <div className="partner-item"></div>
                    <div className="partner-item"></div>
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
    </div>
  );
}

export default Home;
