import { totalScoreMessage } from "@/data/scores";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { AttributeScore } from "@/types/types";

const LOW_TOTAL_SCORE = 84;
const MEDIUM_TOTAL_SCORE = 161;
const MAX_TOTAL_SCORE = 200;

enum Colors {
  LOW = "#92d5ce",
  MEDIUM = "#9f7eee",
  HIGH = "#5325a0",
}

export const MainScore = ({
  attributes,
  name,
}: {
  name: string;
  attributes: AttributeScore;
}) => {
  const { relational, emotional, mental, physical, financial, burnout } =
    attributes;
  const totalScore =
    relational.score +
    emotional.score +
    mental.score +
    physical.score +
    financial.score +
    burnout.score;

  let color = Colors.LOW;
  let totalMessage = totalScoreMessage.low;
  let mainScoreTag = "Bajo";
  if (totalScore > LOW_TOTAL_SCORE) {
    color = Colors.MEDIUM;
    totalMessage = totalScoreMessage.medium;
    mainScoreTag = "Medio";
  }
  if (totalScore > MEDIUM_TOTAL_SCORE) {
    color = Colors.HIGH;
    totalMessage = totalScoreMessage.high;
    mainScoreTag = "Alto";
  }

  return (
    <>
      <h1 className="text-4xl font-title font-bold p-4 text-nua-purple-main">
        {name}, aquí están tus resultados
      </h1>
      <div className="flex flex-row items-center">
        <div className="grid place-items-center w-[18rem] m-8">
          <CircularProgressbar
            value={(totalScore / MAX_TOTAL_SCORE) * 100}
            text={`${Math.round((totalScore / MAX_TOTAL_SCORE) * 100)}%`}
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
            maxValue={100}
          />
        </div>
        <div>
          <p className="text-2xl font-title font-bold max-w-[15rem]">
            Tu puntaje general de Powerskills es
          </p>
          <p className="font-title font-bold text-4xl" style={{ color }}>
            {mainScoreTag}
          </p>
        </div>
      </div>
      <p
        className="font-text font-thin p-4 text-lg text-justify hyphens-auto"
        dangerouslySetInnerHTML={{ __html: totalMessage }}
      />
    </>
  );
};
