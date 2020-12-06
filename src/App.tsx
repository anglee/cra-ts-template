/**
 * Copyright (c) Ang Lee 2020 (http://anglee.info/)
 **/

import './App.css';
import 'antd/dist/antd.less';
import { HomeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { Route } from 'react-router';
import { HashRouter as Router, Link } from 'react-router-dom';
import DataCategories from './pages/DataCategories/DataCategories';
import DataDetailsPage from './pages/DataDetailsPage/DataDetailsPage';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App pt-8">
      <Router>
        <div className="max-w-4xl mx-auto mb-3">
          <Link to="/">
            <Button type="link" icon={<HomeOutlined />} />
          </Link>
        </div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dataCategories" component={DataCategories} />
        <Route exact path="/data" component={DataDetailsPage} />
      </Router>
    </div>
  );
}

export default App;
