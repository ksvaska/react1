
import './App.css';
import { Chart } from "react-google-charts";

export const data =[
  ['Expenses','Dollar'],
  ['Food', 120],
  ['Credit', 150],
  ['Entertainment', 80],
  ['Investment', 150],
  ['Clothes', 75],
];

export const options ={
  title: 'My costs',
  is3D: true,
  colors: ['red','green','blue','pink','orange'],
};


function App() {
  return (
   <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
  );
}

export default App;
