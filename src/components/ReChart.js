import React from "react";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import  getAllNotesFrequencies  from "../audioProcessing/frequencyComputations/getNotesFrequencies";
import NOTES from "../utils/notes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const ReChart = ({ data }) => {
  const notesFrequencies = getAllNotesFrequencies();
  const [series, setSeries] = useState(null);
  const [options, setOptions] = useState(null);
  const [currentNote, setCurrentNote] = useState(null);
  const scale = ["a", "b", "c", "d", "e"];
  return (
    <LineChart
      layout="vertical"
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      {/* <XAxis dataKey="name" /> */}
      <XAxis type="date" domain={[0, "dataMax + 1000"]} />
      {/* <YAxis XAxisdataKey="name" type="category" /> */}
      {/* <YAxis dataKey="pitch" type="number" ticks={scale} /> */}
      {/* <YAxis type="category" domain={["a", "b", "c"]} /> */}
      <YAxis type="number" />
      <Tooltip />
      <Legend />
      {/* <Line dataKey="name" stroke="#001529" activeDot={{ r: 5 }} /> */}
      <Line dataKey="name" stroke="#8884d8" />
    </LineChart>
  );
};

export default ReChart;
