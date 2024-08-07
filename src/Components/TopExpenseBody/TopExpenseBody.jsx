import React from 'react'
import '../TransactionBody/TransactionsBody.css'
import useChartData from '../Customhooks/userChartData';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

function TopExpenseBody() {
    const chartData  = useChartData([
        { name: 'food', value: 0 },
        { name: 'entertainment', value: 0 },
        { name: 'travel', value: 0 },
    ]);
    const showSortedData = () => {
        return chartData.sort((a,b) => b.value - a.value);
    }
    console.log(showSortedData());
    
  return (
        <div className='TopExpensesBody' style={{height: "100px"}} onClick={showSortedData}>
            <ResponsiveContainer width="100%" height="100%" >
                <BarChart data={showSortedData()} layout="vertical" barSize={30}>
                    <XAxis type='number' hide/>
                    <YAxis type="category" width={120} dataKey="name"/>
                    <Bar dataKey="value" fill="#8784D2" />
                </BarChart>
            </ResponsiveContainer>
        </div>
  )
}

export default TopExpenseBody;
