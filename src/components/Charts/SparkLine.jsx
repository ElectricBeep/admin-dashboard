import React from "react";
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
    render() {
        const { id, height, width, data, type } = this.props;

        return (
            <SparklineComponent
                id={id}
                height={height}
                width={width}
                lineWidth={1}
                valueType="Numeric"
                tooltipSettings={{
                    visible: true,
                    format: '${x} : data ${yval}',
                    trackLineSettings: {
                        visible: true,
                    },
                }}
                markerSettings={{ visible: ['All'], size: 2.5 }}
                dataSource={data}
                xName="x"
                yName="yval"
                type={type}
            >
                <Inject services={[SparklineTooltip]} />
            </SparklineComponent>
        );
    }
}

export default SparkLine;