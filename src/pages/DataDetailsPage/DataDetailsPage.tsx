/**
 * Copyright (c) Ang Lee 2020 (http://anglee.info/)
 **/

import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const DataDetailsPage = () => {
  const query = useQuery();
  return (
    <div className="DataCategories bg-white px-12 py-8 max-w-4xl mx-auto shadow-lg">
      Search for data: <span className="font-bold">{query.get('q')}</span>
    </div>
  );
};

export default DataDetailsPage;
