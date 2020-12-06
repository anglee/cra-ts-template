/**
 * Copyright (c) Ang Lee 2020 (http://anglee.info/)
 **/

import './DataCategories.css';
import {
  AppstoreOutlined,
  FolderOpenOutlined,
  FolderOutlined,
} from '@ant-design/icons';
import { Tree } from 'antd';
import _ from 'lodash';
import React from 'react';
import DataSearchGroupTitle from './DataSearchGroupTitle';

const LEAF: any[] = [];
const dataCategories = {
  'Milky Of Communities': {
    'Igneous Highlights': {
      'The Canonical Bob Project': LEAF,
      'Sausage Metal': LEAF,
      'Lonely Division': LEAF,
      'Ownership Orions': LEAF,
      'Trace Assassins': LEAF,
      'Responsible Of The Redneck': LEAF,
      'Violet and the Sprites': {
        'My Heart, Your Cheeks': LEAF,
        'One Hundred Times Cool': LEAF,
        'Pheobe and Sons': LEAF,
      },
      'Inflation Pineapple Brigade': LEAF,
      'Prancing Twins': LEAF,
      'Ten Times Zillow': LEAF,
    },
    'Shouting Eyebrows': {
      'Volatility Of Beating': LEAF,
      'Library Tadpols': LEAF,
      'Bathtub Acting': {
        'Canonical Ladies': LEAF,
        Pointlessplay: LEAF,
        Megafairy: LEAF,
        'Rosie Wonder': LEAF,
      },
    },
  },
  'Access Love': {
    'Sunday Puppies': {
      'Core Joystick': LEAF,
      'Factoratron Kid': LEAF,
      'Beach Revival': LEAF,
      'Mild Cream Day': LEAF,
      'Les Iron Filings': LEAF,
      'The Angry Model': LEAF,
    },
    'Off Cross': {
      'Till Scene Mappings': LEAF,
      'Succulent Constituents': LEAF,
      'Delerious Prices': LEAF,
      'Constituents Defiances': LEAF,
      'Details Carnal': LEAF,
      'Index Of Matrix': LEAF,
    },
    Fairgrounds: {
      'Currencies Of Ferry': LEAF,
      'Back Future Is': LEAF,
      'Labor Out - Introverts': LEAF,
      'Labor Out - Extroverts': LEAF,
      'Kintos Jest': LEAF,
    },
  },
  'Dog Experts': {
    'Vignettes Of Us': {
      'Feature Broccolis': LEAF,
      'Fuji Adaptation': LEAF,
      'Frustrated Analytics': LEAF,
      'Gifted Hazel': LEAF,
      'Enchanting Loadings': LEAF,
      'Rate Histories': LEAF,
    },
    'Classic Returns': {
      'Equity Smack': LEAF,
      'Actuals Voiceless': LEAF,
      'Egg Of Beethovens': LEAF,
      'Generators State': LEAF,
      'Innate Knobby': LEAF,
      'Curves Of The Sunburn': LEAF,
    },
    'Estate Fences': {
      'Since Zeros': LEAF,
      'Zero Lineage': LEAF,
      'Mention Of Zero': LEAF,
    },
  },
};

interface ITreeNode {
  title: React.ReactNode | string;
  key: string;
  children?: ITreeNode[];
  icon?: any;
  switcherIcon?: any;
  selectable: false;
}

const convertToTreeNode = (
  name: string,
  objectOrLeaf: any,
  parentKey: string,
  depth: number,
) => {
  const key = `${parentKey} - ${name}`;
  const node: ITreeNode = {
    title: <DataSearchGroupTitle title={name} link={`/data?q=${name}`} />,
    key,
    icon: (state: any) => {
      if (!state.data.children) {
        return <AppstoreOutlined />;
      }
      return null;
      // return state.expanded ? <FolderOpenOutlined /> : <FolderOutlined />;
    },
    selectable: false,
  };
  if (objectOrLeaf !== LEAF) {
    const obj = objectOrLeaf;
    node.children = _.map(obj, (v, k) =>
      convertToTreeNode(k, v, key, depth + 1),
    );
    node.switcherIcon = (state: any) => {
      return state.expanded ? <FolderOpenOutlined /> : <FolderOutlined />;
    };
  }
  return node;
};

const theTreeData: ITreeNode[] = _.map(dataCategories, (v, k) =>
  convertToTreeNode(k, v, '', 0),
);

const DataCategories = () => {
  const handleSelect = (selectedKeys: any, info: any) => {
    info.nativeEvent.stopPropagation();
  };
  const handleCheck = (checkedKeys: any, info: any) => {
    console.log({ checkedKeys, info });
  };
  return (
    <div className="DataCategories bg-white px-12 py-8 max-w-4xl mx-auto shadow-lg">
      <div className="text-3xl mb-2">Sketch Band Data</div>
      <div className="text-sm mb-9 text-gray-600">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </div>
        <div>
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam?
          Go to{' '}
          <a
            href="https://en.wikipedia.org/wiki/Winnie-the-Pooh"
            target="_blank"
            rel="noopener noreferrer"
          >
            winnie the pooh
          </a>
          .
        </div>
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-8">
        {_.map(theTreeData, (branch) => (
          <div key={branch.key}>
            <h1 className="DataCategories-l1-title border-b border-gray-400 text-base pb-1 mb-3">
              {branch.title}
            </h1>
            <Tree
              // showIcon
              showLine={{ showLeafIcon: false }}
              // showLine={true}
              treeData={branch.children}
              defaultExpandedKeys={_.map(branch.children, 'key')}
              // selectedKeys={[]}
              onSelect={handleSelect}
              onCheck={handleCheck}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataCategories;
