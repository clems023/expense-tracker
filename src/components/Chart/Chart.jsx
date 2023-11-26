import './Chart.css'
import ChartBar from './ChartBar'

const Chart = ({ dataPoints }) => {
    console.log(dataPoints);
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
    return (
        <div className="chart">
            {dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.name}
                    label={dataPoint.name}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                />)}
        </div>
    )
}

export default Chart