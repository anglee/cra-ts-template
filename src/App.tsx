/**
 * Copyright (c) Ang Lee 2020 (http://anglee.info/)
 **/

import { Select } from 'antd';
import './App.less';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Pricing Plans
          </h2>
          <p className="mt-5 text-xl text-gray-400">
            Start building for free, then add a site plan to go live. Account plans unlock
            additional features.
          </p>
        </div>
        <div className="mt-10 w-full max-w-xs">
          <label htmlFor="currency" className="block text-base font-medium text-gray-300">
            Currency
          </label>
          <div className="mt-1.5 relative">
            <Select
              defaultValue="usd"
              className="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm"
            >
              <Select.Option value="ars">Argentina (ARS)</Select.Option>
              <Select.Option value="aud">Australia (AUD)</Select.Option>
              <Select.Option value="usd">United States (USD)</Select.Option>
              <Select.Option value="cad">Canada (CAD)</Select.Option>
              <Select.Option value="eur">France (EUR)</Select.Option>
              <Select.Option value="jpy">Japan (JPY)</Select.Option>
              <Select.Option value="ngn">Nigeria (NGN)</Select.Option>
              <Select.Option value="chf">Switzerland (CHF)</Select.Option>
              <Select.Option value="gbp">United Kingdom (GBP)</Select.Option>
            </Select>
            <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
              <svg
                className="h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
