/**
 * Copyright (c) Ang Lee 2020 (http://anglee.info/)
 **/

import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  link: string;
}

const DataSearchGroupTitle = ({ title, link }: IProps) => {
  const [isIconVisible, setIsIconVisible] = useState<boolean>(false);
  return (
    <span
      onMouseEnter={() => setIsIconVisible(true)}
      onMouseLeave={() => {
        setIsIconVisible(false);
      }}
      className="whitespace-nowrap"
    >
      <Link to={link}>{title}</Link>
      {isIconVisible && <SearchOutlined className="ml-2" />}
    </span>
  );
};

export default DataSearchGroupTitle;
