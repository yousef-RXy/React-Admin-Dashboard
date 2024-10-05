import React from 'react';
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Calendar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 mt-16 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        width="100%"
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        currentView="Month"
        backgroundColor={currentMode === 'Dark' ? '#33373e' : '#fff'}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
