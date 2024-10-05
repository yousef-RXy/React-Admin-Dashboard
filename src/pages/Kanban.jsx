import React from 'react';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Kanban = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-2 md:m-10 p-2 md:p-16 mt-16 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        dataSource={kanbanData}
        keyField="Status"
        className="bg-white dark:bg-secondary-dark-bg"
      >
        <ColumnsDirective>
          {kanbanGrid.map((column, index) => (
            <ColumnDirective key={index} {...column} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
