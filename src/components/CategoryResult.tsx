import { scoreColors } from "@/data/scores";
import { Score, ScoreMessages } from "@/types/types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const CategoryResult = ({
  result,
  title,
  scoreMessages,
}: {
  result: Score;
  title: string;
  scoreMessages: Record<keyof ScoreMessages, string>;
}) => {
  let pathColor = scoreColors.low;
  let text = scoreMessages.low;
  if (result.score > result.low) {
    pathColor = scoreColors.medium;
    text = scoreMessages.medium;
  }
  if (result.score >= result.high) {
    pathColor = scoreColors.high;
    text = scoreMessages.high;
  }

  return (
    <div className="p-4 m-2 rounded-md border-2 text-justify">
      <p className="text-lg font-title font-bold"> {title} </p>
      <p className="font-text">{text}</p>
      <div className="w-[100px]">
        <CircularProgressbar
          value={result.score}
          text={`${result.score}`}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "round",
            textSize: "25px",
            // Colors
            pathColor: pathColor,
            textColor: pathColor,
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
          maxValue={result.max}
        />
      </div>
    </div>
  );
};
