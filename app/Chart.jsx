// components/BarChart.js
"use client";

import React, { useEffect, useRef } from "react";
import anychart from "anychart";

const Chart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    // Ensure we only run this code once
    const chart = anychart.bar();

    // data
    const winlossData = [
      [65, 17, "Shots on Goal"],
      [61, 21, "2Total Shots"],
      [55, 27, "Blocked Shots"],
      [37, 45, "Shots Inside Box"],
      [25, 41, "Shots Outside Box"],
      [25, 57, "Fouls"],
      [25, 57, "Corner Kicks"],
      [17, 65, "Offsides"],
      [25, 57, "Ball Possession"],
      [40, 42, "Yellow Cards"],
      [37, 45, "Red Cards"],
      [48, 34, "Goalkeeper Saves"],
      [26, 56, "Total Passes"],
      [32, 50, "Passes Accurate"],
      [24, 58, "Passes %"],
    ];

    // configure a function to create series
    const createSeries = (columnNumber, name) => {
      const data = [];
      for (let i = 0; i < winlossData.length; i++) {
        const value = winlossData[i][columnNumber];
        const center = 0;
        if (name === "Wins") {
          data.push({
            x: winlossData[i][2],
            low: center,
            high: center + value,
            value: value,
          });
        } else {
          data.push({
            x: winlossData[i][2],
            low: -center,
            high: -center - value,
            value: value,
          });
        }
      }

      const series = chart.rangeBar(data);
      series.name(name);
    };

    // create series
    createSeries(0, "Losses");
    createSeries(1, "Wins");

    // set the chart title
    chart
      .title()
      .enabled(true)
      .text(
        "20 Years of LA Lakers Win-Loss Record with Kobe Bryant (1996-2016)"
      );

    // enable the chart legend
    chart.legend().enabled(true);

    // create a stacked bar chart from the multi-series bar chart
    chart.yScale().stackMode("value");

    // set a container id for the chart
    chart.container(chartContainerRef.current);

    // initiate chart drawing
    chart.draw();

    // Clean up the chart on component unmount
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "500px" }} />
  );
};

export default Chart;
