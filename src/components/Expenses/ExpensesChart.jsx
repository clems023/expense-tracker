/* eslint-disable react/prop-types */
import Chart from '../Chart/Chart'

const ExpensesChart = ({ expenses }) => {

    const chartDataPoints = [
        { name: "Jan", value: 0 },
        { name: "Feb", value: 0 },
        { name: "Mar", value: 0 },
        { name: "Apr", value: 0 },
        { name: "May", value: 0 },
        { name: "Jun", value: 0 },
        { name: "Jul", value: 0 },
        { name: "Aug", value: 0 },
        { name: "Sep", value: 0 },
        { name: "Oct", value: 0 },
        { name: "Nov", value: 0 },
        { name: "Dec", value: 0 }
    ]

    for (const expense of expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount
    }



    return (
        <Chart dataPoints={chartDataPoints} />
    )
}

export default ExpensesChart