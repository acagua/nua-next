"use client";

import { Results } from "@/types/types";
import { burnoutScoreMessage } from "@/data/scores";
import * as GaugeChart from "react-gauge-chart";
import { percentageToValue } from "@/helpers/getScoreValue";

export const BurnoutSection = ({ data }: { data: Results }) => {
  const score = data.attributes.burnout.score / data.attributes.burnout.max;
  let scoreMessage = burnoutScoreMessage.low;
  if (score > data.attributes.burnout.low / 100) {
    scoreMessage = burnoutScoreMessage.medium;
  }
  if (score > data.attributes.burnout.high / 100) {
    scoreMessage = burnoutScoreMessage.high;
  }
  const gaugeColors = ["#92d5ce", "#2f9ea2", "#9f7eee", "#5325a0", "#311868"];
  console.log({ score });
  const needleColor = gaugeColors[percentageToValue(score * 100) - 1];
  return (
    <div className="flex flex-col items-center basis-0 flex-grow shrink">
      <h2 className="text-3xl font-title font-bold text-nua-green-secondary">
        Burnout
      </h2>
      <div className="mt-8">
        <GaugeChart.default
          id="gauge-burnout"
          needleBaseColor={needleColor}
          needleColor={needleColor}
          arcPadding={0.01}
          percent={score}
          nrOfLevels={5}
          colors={["#92d5ce", "#2f9ea2", "#9f7eee", "#5325a0", "#311868"]}
          textColor="transparent"
          style={{ maxWidth: "30rem", minWidth: "30rem" }}
        />
      </div>
      <p
        className="font-title text-3xl font-bold mb-8"
        style={{ color: needleColor }}
      >
        {score * 100}%
      </p>
      <p className="font-text text-md text-justify">{scoreMessage}</p>
    </div>
  );
};
