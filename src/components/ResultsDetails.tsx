"use client";

import Image from "next/image";
import PremiumIcon from "/public/Premium.svg";
import LogoIcon from "/public/logo.svg";
import { CategoryResult } from "./CategoryResult";
import { Results } from "../types/types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { totalScore } from "@/data/scores";

export const ResultsDetails = ({ data }: { data: Results }) => {
  const { name, attributes } = data;
  console.log(attributes);
  const colors = {
    low: "#92d5ce",
    medium: "#9f7eee",
    high: "#5325a0",
  };
  return (
    <>
      <div className="flex flex-row w-full p-4 h-24 justify-center bg-nua-purple-main">
        <Image src={LogoIcon} alt="icon" />
      </div>
      <div className="flex flex-col w-[45vw] min-w-[400px] flex-grow">
        <h1 className="text-2xl font-title">
          {name} aquí están tus resultados!
        </h1>
        {/* <Image src={PremiumIcon} alt="icon" /> */}
        <div className="w-[200px]">
          <CircularProgressbar
            value={80}
            text={`${80}`}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: "round",
              textSize: "25px",
              // Colors
              pathColor: colors.high,
              textColor: colors.high,
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
            maxValue={100}
          />
        </div>
        <p className="text-lg font-title font-bold"> Calificación general </p>
        <p className="font-text"> {totalScore.high}</p>
        <CategoryResult score={attributes.relational} title="Relacional" />
        <CategoryResult score={attributes.emotional} title="Emocional" />
        <CategoryResult score={attributes.mental} title="Mental" />
        <CategoryResult score={attributes.physical} title="Físico" />
        <CategoryResult score={attributes.financial} title="Financiero" />
        <CategoryResult score={attributes.burnout} title="Burnout" />
      </div>
    </>
  );
};
