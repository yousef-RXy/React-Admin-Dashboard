import React from 'react';
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

const SparkLine = ({ currentColor, id, type, height, width, data, color }) => {
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
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
