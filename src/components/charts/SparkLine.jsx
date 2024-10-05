import React from 'react';
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';

const SparkLine = ({ currentColor, id, type, height, width, data, color }) => {
  const { currentMode } = useStateContext();

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ width: 2, color: currentColor }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{ visible: true, format: '${x} : data ${yval}' }}
      trackLineSettings={{ visible: true }}
      axisSettings={{
        lineSettings: {
          color: currentMode === 'Dark' ? '#e5e5e5' : '#424242',
        },
      }}
      background={currentMode === 'Dark' ? '#33373e' : '#fff'}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
