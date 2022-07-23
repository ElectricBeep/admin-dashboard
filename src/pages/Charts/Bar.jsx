import { ChartComponent, SeriesDirective, SeriesCollectionDirective, BarSeries, Inject, ColumnSeries, Legend, Tooltip, Category, DataLabel } from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {
    const { currentMode } = useStateContext();

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Bar" title="Olympic Medal Counts - RIO" />
            <ChartComponent
                id="bar-chart"
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === "Dark" ? "#33373E" : "#fff"}
                legendSettings={{ background: 'white' }}
            >
                <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                <SeriesCollectionDirective>
                    {barCustomSeries.map((item, index) => (
                        <SeriesDirective key={index} {...item} />
                    ))}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default Bar