import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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
    Legend
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
        label: "Resultados",
        data: [
          (attributes.relational.score * 100) / attributes.relational.max,
          (attributes.emotional.score * 100) / attributes.emotional.max,
          (attributes.mental.score * 100) / attributes.mental.max,
          (attributes.physical.score * 100) / attributes.physical.max,
          (attributes.financial.score * 100) / attributes.financial.max,
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
  };

  return (
    <div className="min-h-[12rem] min-w-[25rem]">
      <Bar data={dataRadar} options={options} />
    </div>
  );
};
