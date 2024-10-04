import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 mt-16 bg-white rounded-3xl">
      <Header category="page" title="Employees"></Header>
      <GridComponent
        dataSource={employeesData}
        allowPaging
        pageSettings={{ pageSize: 10 }}
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((column, index) => (
            <ColumnDirective key={index} {...column} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Search]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
