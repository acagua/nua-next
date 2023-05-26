import ArrowIcon from "/public/arrow.svg";
import { scoreColors } from "@/data/scores";
import { Score, ScoreMessages } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
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
  const [toggled, setToggled] = useState(false);

  let pathColor = scoreColors.low;
  let text = scoreMessages.low;
  let tagName = "Bajo";
  let tagStyles = "bg-nua-green-aux-transparent text-nua-green-secondary";
  if (result.score > result.low) {
    pathColor = scoreColors.medium;
    text = scoreMessages.medium;
    tagName = "Medio";
    tagStyles = "bg-nua-purple-aux-transparent text-nua-purple-secondary";
  }
  if (result.score >= result.high) {
    pathColor = scoreColors.high;
    text = scoreMessages.high;
    tagName = "Alto";
    tagStyles = "bg-nua-purple-main text-nua-white-main";
  }

  const handleOnClick = () => {
    console.log("click");
    setToggled((prev) => !prev);
  };

  //TODO Pasar puntajes a porcentaje

  return (
    <div className="p-4 m-2 rounded-md border-2 text-justify w-full">
      <div className="flex justify-between" onClick={handleOnClick}>
        <span className="text-lg font-title font-bold">{title}</span>
        <span
          className={`ml-2 font-text text-sm font-bold ${tagStyles} px-2 py-1 rounded-md`}
        >
          {tagName}
        </span>
        <Image
          className={`inline ml-auto ${
            toggled ? "" : "-rotate-90"
          } transition-all duration-500`}
          src={ArrowIcon}
          alt="arrow-icon"
          width={30}
        />
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-500 ${
          toggled ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } `}
      >
        <div className="flex flex-row sm:flex-col w-full items-center sm:justify-center min-h-0">
          <div className="min-w-[15rem] max-w-[15rem] p-5">
            <CircularProgressbar
              value={(result.score / result.max) * 100}
              text={`${Math.round((result.score / result.max) * 100)}%`}
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
              maxValue={100}
            />
          </div>
          <p className="font-text flex-grow p-2 min-w-[15rem]">{text}</p>
        </div>
      </div>
    </div>
  );
};
