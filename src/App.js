import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Weather from "./containers/Weather/Weather";
import Weight from "./containers/Weight/Weight";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Length from "./containers/Length/Length";
import Layout from "./hoc/Layout/Layout";

const Home = () => <div>Home</div>;

const App = () => {
  return (
    <Router>
      <Layout>
        <Route path="/weather/" component={Weather} />
        <Route path="/weight/" component={Weight} />
        <Route path="/length/" component={Length} />
        <Route path="/" exact component={Home} />
      </Layout>
    </Router>
  );
};

export default App;
