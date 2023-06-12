import { ResultsDetails } from "@/components/ResultsDetails";
import { getScores } from "@/helpers/generateResults";
import { Results, TypeFormResponse } from "@/types/types";
import { redirect } from "next/navigation";

const MAX_RETRIES = 3;
export default async function Page({ params }: { params: { id: string } }) {
  const scores = await getResults(params.id, MAX_RETRIES);

  if (scores === null) {
    return (
      <p>
        Lo siento algo pasó con nuestro sitio, por favor intenta de nuevo más
        tarde
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-row h-full w-full flex-wrap">
        <ResultsDetails data={scores} />
      </div>
    </>
  );
}

async function getResults(
  id: string,
  retries: number
): Promise<Results | null> {
  try {
    const response = await fetch(
      `https://api.typeform.com/forms/${process.env.NEXT_PUBLIC_FORM_ID}/responses?included_response_ids=${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER}`,
          contentType: "application/json",
        },
      }
    );
    const data: TypeFormResponse = await response.json();
    const answers = data.items[0].answers;
    console.log(JSON.stringify(data));
    const scores = getScores(answers, id);
    return scores;
  } catch (error) {
    if (retries > 0) {
      console.log("retrying");
      console.log({ error });
      return getResults(id, retries - 1);
    }
    console.log("fatal error");
    return null;
  }
}
