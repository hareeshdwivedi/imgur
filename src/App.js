import React, { Component } from 'react';
import Home from './components/Home';
import Allbum from './components/Gallery/allbum/Allbum';
import User from './components/user/User';
import ScrollTop from "react-scrolltop-button";
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >

        <Router>
        <div>
<Route exact  path="/" component={Home}></Route>
<Route path="/gallery/:id" component={Allbum}></Route>
<Route path="/user" component={User}></Route>
<ScrollTop text="TAKE ME UP"   style={{ backgroundColor: "#53565f",color:'#fff',border:'none',fontSize:'13px' }}/>
        </div>

          </Router>

      </div>
    );
  }
}

export default App;
