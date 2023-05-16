import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useState } from "react";
import { Radar } from "react-chartjs-2";
import { Results } from "@/types/types";

interface Props {
  data: Results;
}
export const RadarGraph = ({ data }: Props) => {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    PointElement,
    LineElement
  );

  const { attributes, email, name } = data;

  const dataRadar = {
    labels: Object.keys(attributes),
    datasets: [
      {
        label: "Resultados",
        data: Object.values(attributes),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="w-[45vw] min-w-[500px] flex-grow">
      <Radar data={dataRadar} options={{ responsive: true }} />
    </div>
  );
};
