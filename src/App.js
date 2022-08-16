import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";


import "./App.css"

// components
import { Navbar, HomePage, Cryptocurrencies, CryptoDetails, News } from "./components/Index.jsx"

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/cryptocurrencies" component={Cryptocurrencies} />
              <Route exact path="/crypto/:coinId" component={CryptoDetails} />
              <Route exact path="/news" component={News} />
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
            Crypton <br />
            All Rights Reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;