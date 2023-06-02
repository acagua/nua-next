"use client";

import { Results } from "@/types/types";
import { burnoutScoreMessage } from "@/data/scores";
import * as GaugeChart from "react-gauge-chart";

export const BurnoutSection = ({ data }: { data: Results }) => {
  const score = data.attributes.burnout.score / data.attributes.burnout.max;
  let scoreMessage = burnoutScoreMessage.low;
  if (score > data.attributes.burnout.low) {
    scoreMessage = burnoutScoreMessage.medium;
  }
  if (score > data.attributes.burnout.high) {
    scoreMessage = burnoutScoreMessage.high;
  }
  return (
    <div className="flex flex-col items-center basis-0 flex-grow shrink">
      <h2 className="text-3xl font-title text-nua-green-secondary">Burnout</h2>
      <div className="mt-8">
        <GaugeChart.default
          id="gauge-burnout"
          needleBaseColor="#9f7eee"
          needleColor="#9f7eee"
          arcPadding={0.01}
          percent={score}
          nrOfLevels={5}
          colors={["#92d5ce", "#2f9ea2", "#9f7eee", "#5325a0", "#311868"]}
          textColor="transparent"
          style={{ maxWidth: "30rem", minWidth: "30rem" }}
        />
      </div>
      <p className="font-title text-3xl font-bold text-nua-purple-secondary mb-8">
        {score * 100}%
      </p>
      <p className="font-text font-thin text-md text-justify">{scoreMessage}</p>
    </div>
  );
};
