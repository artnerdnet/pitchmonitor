import React from "react";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import getAllNotesWithinRange from '../utils/getNotesWithinRange'

const ApexChart = ({ data, }) => {
  function closest(arr, closestTo) {
    var closest = 1975; //Get the highest number in arr in case it match nothing.
    let completeValue;
    for (var i = 0; i < arr.length; i++) {
      const roundedFrequency = Math.round(arr[i].frequency);
      if (roundedFrequency >= closestTo && roundedFrequency < closest) {
        closest = arr[i].frequency; //Check if it's higher than your number, but lower than your closest value
        completeValue = arr[i];
      }
    }
    return completeValue;
  }

  const notesFrequencies = getAllNotesWithinRange();
  const [series, setSeries] = useState(null);
  const [options, setOptions] = useState(null);
  const [currentNote, setCurrentNote] = useState(null);

  const initialOptions = {
    chart: {
      id: "realtime",
      height: 350,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 20,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
        type: "x",
        autoScaleYaxis: true,
        zoomedArea: {
          fill: {
            color: "#90CAF9",
            opacity: 0.4,
          },
          stroke: {
            color: "#0D47A1",
            opacity: 0.4,
            width: 1,
          },
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 0.99,
      opacity: 1,
    },
    markers: {
      size: 0,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      offsetX: 0,
      enabled: true,
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        show: false,
      },
      // labels: {
      //   show: true,
      //   align: "right",
      //   minWidth: 0,
      //   maxWidth: 160,
      //   style: {
      //     colors: [],
      //     fontSize: "12px",
      //     fontFamily: "Helvetica, Arial, sans-serif",
      //     fontWeight: 400,
      //     cssClass: "apexcharts-yaxis-label",
      //   },
      //   offsetX: 0,
      //   offsetY: 0,
      //   tickAmount: 10,
      //   rotate: 0,
      //   // formatter: function (val, index) {
      //   //   if (data !== undefined && data.length > 0) {
      //   //     return data[0].x;
      //   //     console.log(data, ">>>>> data");
      //   //     console.log(data, ">>>>> data");
      //   //     console.log(val, "value>>>>>>");
      //   //     // return data[data.length].x;
      //   //   }
      //   //   // const value = NOTES.map((item) => {
      //   //   // });
      //   //   // console.log(value);
      //   //   // return value;
      //   // },
      // },
    },
    xaxis: {
      show: false,
      //   categories: [0],
      //   tickAmount: 7, // optional tickAmount value
    },
  };

  useEffect(() => {
    setOptions(initialOptions);
  }, []);

  useEffect(() => {
    if (data) {
      const initialSeries = [
        {
          data: data.slice(),
        },
      ];
      setSeries(initialSeries);
    }
  }, [data]);

  useEffect(() => {
    if (data !== undefined && data.length > 0 && notesFrequencies) {
      const index = data.length;
      const notecurrent = Math.round(data[index - 1].y);
      const closestNote = closest(notesFrequencies, notecurrent);

      if (closestNote !== undefined) {
        setCurrentNote(closestNote.note);
      }
    }
  }, [data]);

  useEffect(() => {
    if (currentNote !== null) {
      setOptions({
        ...initialOptions,
        yaxis: {
          tickAmount: 1,
          labels: {
            enabled: false,
            formatter: function (val, index) {
              if (index?.w !== undefined) {
                // console.log(
                //   index.w.config.series[0].data[index.seriesIndex].x,
                //   "w"
                // );
                // return index.w.config.series[0].data[index.seriesIndex].x;
                return val;
              }

              return val;
              // return currentNote;
            },
          },
        },
      });
    }
  }, [data, currentNote]);

  return (
    <div id="chart">
      {options && series ? (
        <ReactApexChart
          options={options}
          series={series}
          id="realtime"
          type="line"
          height={400}
        />
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default ApexChart;
