import React from 'react'
import fb from '../assets/FB.png'
import ins from '../assets/instagram.png'
import twiss from '../assets/twitter.png'
function Footer() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 offset-md-6">
                        <h4>Contact</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <p>Email: EasyGo@gmail.com.vn</p>
                        <p>Phone: 0982.682.326</p>
                        <p>Address: 1, Vo Van Ngan, Tp.Thu Duc</p>
                        
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <div className="row FormInput">
                            <p>Name:</p>
                            <input className="inputform"></input>
                        </div>
                        <div className="row FormInput">
                            <p>Phone:</p>
                            <input className="inputform"></input>
                        </div>
                        <div className="row FormInput">
                            <p>Email:</p>
                            <input className="inputform"></input>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="footer_icon col-md-5">
                        <img src={fb}></img>
                        <img src={ins}></img>
                        <img src={twiss}></img>
                    </div>
                    <div className="col-md-5 offset-md-1 btnfooter">
                        <div className="buttonSubmit">
                            Send
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
