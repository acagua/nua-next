import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
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
    LineElement,
    Filler
  );
  ChartJS.defaults.font.size = 16;

  const { attributes } = data;

  const dataRadar = {
    labels: [
      attributes.relational.name,
      attributes.emotional.name,
      attributes.mental.name,
      attributes.physical.name,
      attributes.financial.name,
      // attributes.burnout.name,
    ],
    datasets: [
      {
        label: "Resultados",
        data: [
          attributes.relational.score,
          attributes.emotional.score,
          attributes.mental.score,
          attributes.physical.score,
          attributes.financial.score,
        ],
        backgroundColor: "rgb(159,126,238, 0.5)",
        borderColor: "rgb(159,126,238)",
        pointBorderColor: "rgb(83, 37, 160)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };
  const options = {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 21,
          },
        },
      },
    },
  };

  return (
    <div className="min-h-[40rem]">
      <Radar data={dataRadar} options={options} />
    </div>
  );
};
