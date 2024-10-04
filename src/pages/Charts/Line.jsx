import React from 'react';

import { ChartsHeader, Header, LineChart } from '../../components';

{
  /* <ChartsHeader category="Line" title="Inflation Rate" /> */
}
const Line = () => (
  <div className="m-2 md:m-10 p-2 md:p-10 mt-16 bg-white rounded-3xl">
    <Header category="charts" title="Line" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
);

export default Line;
