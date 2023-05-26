"use client";

import Image from "next/image";
import PremiumIcon from "/public/Premium.svg";
import LogoIcon from "/public/logo2.svg";
import { CategoryResult } from "./CategoryResult";
import { Results } from "../types/types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  burnoutScoreMessage,
  emotionalScoreMessage,
  financialScoreMessage,
  mentalScoreMessage,
  physicalScoreMessage,
  relationalScoreMessage,
  totalScoreMessage,
} from "@/data/scores";

const LOW_TOTAL_SCORE = 84;
const MEDIUM_TOTAL_SCORE = 161;
const MAX_TOTAL_SCORE = 200;

enum Colors {
  LOW = "#92d5ce",
  MEDIUM = "#9f7eee",
  HIGH = "#5325a0",
}
export const ResultsDetails = ({ data }: { data: Results }) => {
  const { name, attributes } = data;

  const { relational, emotional, mental, physical, financial, burnout } =
    attributes;
  const totalScore =
    relational.score +
    emotional.score +
    mental.score +
    physical.score +
    financial.score +
    burnout.score +
    52;

  let color = Colors.LOW;
  let totalMessage = totalScoreMessage.low;
  if (totalScore > LOW_TOTAL_SCORE) {
    color = Colors.MEDIUM;
    totalMessage = totalScoreMessage.medium;
  }
  if (totalScore > MEDIUM_TOTAL_SCORE) {
    color = Colors.HIGH;
    totalMessage = totalScoreMessage.high;
  }

  const PremiumScore = () => {
    if (totalScore > MEDIUM_TOTAL_SCORE) {
      return (
        <Image
          className="relative col-span-full row-span-full w-6 bottom-12"
          src={PremiumIcon}
          alt="icon"
        />
      );
    }
    return <></>;
  };
  return (
    <>
      <nav className="top-0 sticky  w-full">
        <div className="flex flex-row w-full p-4 h-32 justify-center bg-nua-white-main border-b-2 border-nua-purple-main">
          <Image src={LogoIcon} alt="icon" />
        </div>
      </nav>
      <div className="pt-3 flex flex-col w-[45vw] min-w-[400px] flex-grow justify-center items-center">
        <h1 className="text-2xl font-title p-4">
          {name} aquí están tus resultados!
        </h1>
        <div className="grid place-items-center w-[200px]">
          <PremiumScore />
          <div className="col-span-full row-span-full">
            <CircularProgressbar
              value={totalScore}
              text={`${totalScore}`}
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
              maxValue={MAX_TOTAL_SCORE}
            />
          </div>
        </div>
        <p className="text-lg font-title font-bold"> Calificación general </p>
        <p className="font-text"> {totalMessage}</p>
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
    </>
  );
};
