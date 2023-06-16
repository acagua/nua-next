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
import { percentageToColor } from "@/helpers/getScoreValue";
import { scoreColors, scoreColorsTransparent } from "@/data/scores";

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

  const barGraphBackgroundColors = {
    relational: percentageToColor(
      attributes.relational,
      scoreColorsTransparent
    ),
    emotional: percentageToColor(attributes.emotional, scoreColorsTransparent),
    mental: percentageToColor(attributes.mental, scoreColorsTransparent),
    physical: percentageToColor(attributes.physical, scoreColorsTransparent),
    financial: percentageToColor(attributes.financial, scoreColorsTransparent),
  };
  const barGraphBorderColors = {
    relational: percentageToColor(attributes.relational, scoreColors),
    emotional: percentageToColor(attributes.emotional, scoreColors),
    mental: percentageToColor(attributes.mental, scoreColors),
    physical: percentageToColor(attributes.physical, scoreColors),
    financial: percentageToColor(attributes.financial, scoreColors),
  };

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
        backgroundColor: [
          barGraphBackgroundColors.relational,
          barGraphBackgroundColors.emotional,
          barGraphBackgroundColors.mental,
          barGraphBackgroundColors.physical,
          barGraphBackgroundColors.financial,
        ],
        borderColor: [
          barGraphBorderColors.relational,
          barGraphBorderColors.emotional,
          barGraphBorderColors.mental,
          barGraphBorderColors.physical,
          barGraphBorderColors.financial,
        ],
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
