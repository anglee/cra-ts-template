/**
 * Copyright (c) Ang Lee 2020 (http://anglee.info/)
 **/

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="DataCategories bg-white px-12 py-8 max-w-4xl mx-auto shadow-lg">
      <Link to="/dataCategories">Data Categories</Link>
    </div>
  );
};

export default LandingPage;
