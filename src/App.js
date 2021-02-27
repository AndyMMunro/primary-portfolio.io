import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
// import Footer from "./components/Footer"
// import Container from "./components/Container";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
// import LoginForm from "./components/LoginForm/login";
// import classes from './app.module.css';


function App() {
  // console.log("hope this works");
  return (
    <Router>
        <Nav />
              <Route  path='/primary-portfolio.io' component={Home} />
              {/* <Route  path='/about' component={About} /> */}
              {/* <Route  path='/projects' component={Projects} /> */}
              {/* <Route  path='/contact' component={Contact} /> */}
                {/* <Route exact path="/LoginForm" component={LoginForm} /> */}
    </Router>
  );
}

export default App;