// import logo from './logo.svg';
import './App.css';
// import '../public/css/Font.css'
// import Navbar from './components/Navbar';
// import moduleName from 'module'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './page/home/Home';
import Yourpage from './page/yourpage/yourpage';
import Regist from './page/regist/regist';
import Gonow from './page/gonow/gonow';
import About from './page/about/about'
import Admin from './page/admin/admin';
import Partner from './page/partner/partner';
// import index from './page/home';
function App() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}

        <Switch>
        <Route exact path="/partner">
            <Partner></Partner>
          </Route>
          <Route exact path="/admin">
            <Admin></Admin>
          </Route>
          <Route exact path="/gonow">
            <Gonow></Gonow>

          </Route>
          <Route exact path="/about">
            <About></About>

          </Route>
          <Route path="/regist">
            <Regist></Regist>

          </Route>
          <Route path="/yourpage">
            <Yourpage></Yourpage>

          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>
      </Router>


    </>
  );
}

export default App;
