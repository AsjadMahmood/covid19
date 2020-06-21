import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './charts.module.css';

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchData();
        // console.log('dailyData',dailyData[0]);
    }, [])

    const lineChart = (
        dailyData.length ?
            (<Line
                data={{
                    labels: dailyData.map(({ date }) => { return date; }),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => { return confirmed; }),
                        label: 'infected',

                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => { return deaths; }),
                        label: 'deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true
                    }
                    ]
                }}
            ></Line>)
            : (<div>Loading . . .</div>)
    )

    const BarChart = (
        confirmed ?
            (<Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [confirmed.value, recovered.value, deaths.value],

                    }],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current State in ${country}` }
                }}>

            </Bar>
            ) : (<div>Loading . . .</div>)
    )

    return (
        <div className={styles.container}>
            {country ? BarChart : lineChart}
        </div>
    )
}

export default Charts;