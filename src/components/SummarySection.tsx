import { Results } from "@/types/types";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import { HorizontalBarGraph } from "./HorizontalBarGraph";

export const SummarySection = ({
  data,
  color,
  score,
}: {
  data: Results;
  color: string;
  score: number;
}) => {
  return (
    <div className="flex flex-col items-center basis-0 flex-grow shrink">
      <h2 className="text-3xl font-title text-nua-green-secondary">
        Habilidades de vida
      </h2>
      <div className="max-w-[18rem] sm:w-[12rem] m-8 ">
        <CircularProgressbarWithChildren
          value={score}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "round",
            textSize: "25px",
            // Colors
            pathColor: color,
            textColor: color,
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        >
          <div
            className="text-4xl font-title text-center font-bold"
            style={{ color }}
          >
            <p>Total</p>
            <p>{score}%</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <HorizontalBarGraph data={data} />
    </div>
  );
};
