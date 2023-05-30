"use client";

import { CategoryResult } from "./CategoryResult";
import { Results } from "../types/types";
import {
  burnoutScoreMessage,
  emotionalScoreMessage,
  financialScoreMessage,
  mentalScoreMessage,
  physicalScoreMessage,
  relationalScoreMessage,
} from "@/data/scores";
import { Navbar } from "./Navbar";
import { MainScore } from "./MainScore";
import { RadarGraph } from "./RadarGraph";

export const ResultsDetails = ({ data }: { data: Results }) => {
  const { name, attributes } = data;

  return (
    <>
      <Navbar />
      <div className="px-32 py-20 sm:px-6 sm:py-8 flex flex-col w-[45vw] flex-grow justify-center items-center">
        <MainScore name={name} attributes={attributes} />
        <div className="pt-16 flex flex-col justify-center">
          <CategoryResult
            result={attributes.burnout}
            scoreMessages={burnoutScoreMessage}
            title={attributes.burnout.name}
          />
          <CategoryResult
            result={attributes.relational}
            scoreMessages={relationalScoreMessage}
            title={attributes.relational.name}
          />
          <CategoryResult
            result={attributes.emotional}
            scoreMessages={emotionalScoreMessage}
            title={attributes.emotional.name}
          />
          <CategoryResult
            result={attributes.mental}
            scoreMessages={mentalScoreMessage}
            title={attributes.mental.name}
          />
          <CategoryResult
            result={attributes.physical}
            scoreMessages={physicalScoreMessage}
            title={attributes.physical.name}
          />
          <CategoryResult
            result={attributes.financial}
            scoreMessages={financialScoreMessage}
            title={attributes.financial.name}
          />
          <RadarGraph data={data} />
        </div>
      </div>
    </>
  );
};
