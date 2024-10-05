import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Edit,
  Filter,
  Selection,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { customersData, contextMenuItems, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 mt-16 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        pageSettings={{ pageSize: 10 }}
        toolbar={['Delete']}
        editSettings={editing}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((column, index) => (
            <ColumnDirective key={index} {...column} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit, Filter, Selection]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
