import { Results } from "@/types/types";
import { burnoutScoreMessage } from "@/data/scores";

export const BurnoutSection = ({ data }: { data: Results }) => {
  return (
    <div className="flex flex-col items-center basis-0 flex-grow shrink">
      <h2 className="text-3xl font-title text-nua-green-secondary">Burnout</h2>
      <>Gauge Graph</>
      <p className="font-text font-thin text-md">{burnoutScoreMessage.high}</p>
    </div>
  );
};
