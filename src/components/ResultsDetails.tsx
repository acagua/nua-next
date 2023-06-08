"use client";

import { CategoryResult } from "./CategoryResult";
import { Results } from "../types/types";
import {
  ScoreLevels,
  emotionalScoreMessage,
  financialScoreMessage,
  mentalScoreMessage,
  physicalScoreMessage,
  relationalScoreMessage,
  scoreColors,
  totalScoreMessage,
} from "@/data/scores";
import { Navbar } from "./Navbar";
import { SummarySection } from "./SummarySection";
import { BurnoutSection } from "./BurnoutSection";
import { EmailResults } from "./EmailResults";

export const ResultsDetails = ({ data }: { data: Results }) => {
  const { name, attributes, email, id } = data;

  const { relational, emotional, mental, physical, financial } = attributes;
  const totalScore =
    relational.score +
    emotional.score +
    mental.score +
    physical.score +
    financial.score;

  const maxTotalScore =
    relational.max + emotional.max + mental.max + physical.max + financial.max;

  let color = scoreColors.low;
  let totalMessage = totalScoreMessage.low;
  let mainScoreTag = "Bajo";
  if (totalScore > ScoreLevels.LOW) {
    color = scoreColors.medium;
    totalMessage = totalScoreMessage.medium;
    mainScoreTag = "Medio";
  }
  if (totalScore > ScoreLevels.MEDIUM) {
    color = scoreColors.high;
    totalMessage = totalScoreMessage.high;
    mainScoreTag = "Alto";
  }
  const displayScore = Math.floor((totalScore * 100) / maxTotalScore);
  return (
    <>
      <Navbar />
      <div className="px-44 py-20 sm:px-6 sm:py-8 flex flex-col w-[45vw] flex-grow justify-center items-center">
        <h1 className="text-4xl sm:text-2xl font-title font-bold p-4 text-nua-purple-main">
          {name}, aquí están tus resultados
        </h1>
        <div className="flex flex-row mt-8 sm:flex-col">
          <SummarySection data={data} color={color} score={displayScore} />
          <div className="border-l border-nua-purple-aux-transparent mx-12"></div>
          <BurnoutSection data={data} />
        </div>
        <div className="pt-16 flex flex-col justify-center">
          <div className="text-justify py-8">
            <h3 className="font-title font-bold text-2xl pb-3">
              Puntaje General
            </h3>
            <p
              className="text-md font-text font-thin"
              dangerouslySetInnerHTML={{ __html: totalMessage }}
            />
          </div>
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
        </div>
        <EmailResults name={name} email={email} reportId={id} />
      </div>
    </>
  );
};
