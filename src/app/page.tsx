"use client";
import { FormWidget } from "@/components/FormWidget";
import { RadarGraph } from "@/components/RadarGraph";
import { ResultsDetails } from "@/components/ResultsDetails";
import { getScores } from "@/helpers/generateResults";
import { Results, TypeFormResponse } from "@/types/types";

import { useState } from "react";

export default function Home() {
  const [scores, setScores] = useState<Results | null>(null);

  const getResponses = async (responseId: string) => {
    //TODO hacer un try catch
    const response = await fetch(`api/${responseId}`);
    const data: TypeFormResponse = await response.json();
    const { items } = data;
    const scores = getScores(items[0].answers);
    setScores(scores);
  };

  return (
    <>
      {scores ? (
        <>
          <div className="flex flex-row h-full w-full p-4 flex-wrap justify-center">
            <ResultsDetails />
            <RadarGraph data={scores} />
          </div>
        </>
      ) : (
        <FormWidget callback={getResponses} />
      )}
    </>
  );
}
