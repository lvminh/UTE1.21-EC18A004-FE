import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Header from './components/header';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';

// ReactDOM.render(
//   <React.StrictMode>
//     <Navbar />
//   </React.StrictMode>,document.getElementById('header'));
ReactDOM.render(
<React.StrictMode>
  <App />
</React.StrictMode>,document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <Slider />
//   </React.StrictMode>,document.getElementById('Slider'));
// ReactDOM.render(
//   <React.StrictMode>
//     <Footer />
//   </React.StrictMode>,document.getElementById('footer'));

reportWebVitals();
