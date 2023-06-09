import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Results } from "@/types/types";

interface Props {
  data: Results;
}
export const HorizontalBarGraph = ({ data }: Props) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
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
    ],
    datasets: [
      {
        label: "%",
        data: [
          Math.round(
            (attributes.relational.score * 100) / attributes.relational.max
          ),
          Math.round(
            (attributes.emotional.score * 100) / attributes.emotional.max
          ),
          Math.round((attributes.mental.score * 100) / attributes.mental.max),
          Math.round(
            (attributes.physical.score * 100) / attributes.physical.max
          ),
          Math.round(
            (attributes.financial.score * 100) / attributes.financial.max
          ),
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
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        max: 100,
      },
    },
  };

  return (
    <div className="min-h-[15rem] min-w-[30rem] mb-4">
      <Bar data={dataRadar} options={options} />
    </div>
  );
};
