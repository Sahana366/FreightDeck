import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';


function Progress() {
  const data = [
    {
      name: '6 am',
      units: 200
    },
    {
      name: '7 am',
      units: 300
    },
    {
      name: '8 am',
      units: 400
    },
    {
      name: '9 am',
      units: 500
    },
    {
      name: '10 am',
      units: 600
    },
    {
      name: '11 am',
      units: 700
    },
    {
      name: '12 pm',
      units: 800
    },
    {
      name: '1 pm',
      units: 900
    },
    {
      name: '2 pm',
      units: 800
    },
    {
      name: '3 pm',
      units: 700
    },
    {
      name: '4 pm',
      units: 600
    },
    {
      name: '5 pm',
      units: 500
    },
    {
      name: '6 pm',
      units: 400
    },
    {
      name: '7 pm',
      units: 300
    }
  ];
  return (
    <div className="Truck-Card">
      <BarChart 
          width={430}
          height={250}
          data={data}
          barGap={3} barCategoryGap={7}
          margin={{
            top: 30,
            right: 30,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="0 2"/>
          <XAxis dataKey="name" tick={{fontSize: 8}} tickLine={false}/>
          <YAxis tick={{fontSize: 8}} tickLine={false}/>
          {/* <Tooltip />
          <Legend /> */}
          <Bar dataKey="units" fill="#8884d8" fontSize={14}/>
        </BarChart>
    </div>
  );
}
 

export default Progress;


