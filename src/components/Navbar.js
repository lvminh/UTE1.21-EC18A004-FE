// import logo from './logo.svg';
// import './App.css';
// import { MenuItem } from '@material-ui/core';
// import { isDOMComponentElement } from 'react-dom/test-utils';
import { useHistory } from 'react-router';
import image from '../assets/Logo.png';

function Navbar() {
    let router = useHistory()
    const active = () =>{
        let a= document.querySelector(".Navbar")
        console.log(a)

    }
  return (
    <div className="fullheader" id="header">
        <div className="container-fluid header">
        <div className="logo">
        <img src={image} alt="Logo"/>
        </div>
        <div className="Navbar">
            <ul>
                <li>
                    <a href="/" className="active">Home</a>
                </li>
                <li>
                    <a href="/partner">Partner</a>
                </li>
                <li>
                    <a href="/regist" onClick={active}>Account</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
            </ul>
        </div>
        <div className="button gonow" onClick={()=> router.push("/regist")}>
            GoNow
        </div>
    </div>
    </div>
  );
}

export default Navbar;
