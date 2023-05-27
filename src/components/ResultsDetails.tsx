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

export const ResultsDetails = ({ data }: { data: Results }) => {
  const { name, attributes } = data;

  return (
    <>
      <Navbar />
      <div className="px-32 py-20 flex flex-col w-[45vw] min-w-[400px] flex-grow justify-center items-center">
        <MainScore name={name} attributes={attributes} />
        <div className="pt-16 flex flex-col justify-center">
          <CategoryResult
            result={attributes.relational}
            scoreMessages={relationalScoreMessage}
            title="Relacional"
          />
          <CategoryResult
            result={attributes.emotional}
            scoreMessages={emotionalScoreMessage}
            title="Emocional"
          />
          <CategoryResult
            result={attributes.mental}
            scoreMessages={mentalScoreMessage}
            title="Mental"
          />
          <CategoryResult
            result={attributes.physical}
            scoreMessages={physicalScoreMessage}
            title="Físico"
          />
          <CategoryResult
            result={attributes.financial}
            scoreMessages={financialScoreMessage}
            title="Financiero"
          />
          <CategoryResult
            result={attributes.burnout}
            scoreMessages={burnoutScoreMessage}
            title="Burnout"
          />
        </div>
      </div>
    </>
  );
};
