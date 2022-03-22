import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

export default wrapper.withRedux(NodeBird);
