import React, { Component } from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";

class Roadmap extends Component {
    render() {
        return (
          <React.Fragment>
            <Navigation />
            <div className="container home page">
              <h1>This is the Roadmap for the Application page!</h1>
            </div>
            <Footer />
          </React.Fragment>
        );
    }
}

export default Roadmap;