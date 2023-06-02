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
    setToggled((prev) => !prev);
  };

  return (
    <div className="p-8 mb-8 rounded-md border-2 border-nua-purple-aux text-justify w-full rounded-tr-[4rem] rounded-bl-[4rem]">
      <div className="flex justify-between" onClick={handleOnClick}>
        <span className="text-2xl font-title font-bold">{title}</span>
        {/* <span
          className={`mx-8 my-auto font-text text-xs font-bold ${tagStyles} px-2 py-1 rounded-md`}
        >
          {tagName}
        </span> */}
        <div className="ml-auto border-nua-purple-aux-transparent border-2 rounded-full p-1">
          <Image
            className={` ${
              toggled ? "" : "-rotate-90"
            } transition-all duration-500`}
            src={ArrowIcon}
            alt="arrow-icon"
            width={30}
          />
        </div>
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
          <p className="font-text font-thin flex-grow p-2 min-w-[15rem]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
