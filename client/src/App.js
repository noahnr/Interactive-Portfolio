import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


import "./style.css";

function App() {

  return (
    <Router>
      <div className='body_wrapper text-center'>
        <Navbar />
        <main>

                <Switch>
                  <Route exact path="/" >
                    <About />
                  </Route>
                  <Route exact path="/Portfolio">
                    <Portfolio />
                  </Route>
                  <Route exact path="/Contact">
                    <Contact />
                  </Route>
                </Switch>

        </main>
      </div>
    </Router>
  );
}

export default App;
