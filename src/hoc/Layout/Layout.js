import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./Layout.css";

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="Layout">
        <Nav />
        <main className="content">{children}</main>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

Layout.defaultProps = {
  children: "Main Content"
};

export default Layout;
