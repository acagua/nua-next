import { ResultsDetails } from "@/components/ResultsDetails";
import { getScores } from "@/helpers/generateResults";
import { TypeFormResponse } from "@/types/types";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const scores = await getResults(params.id);

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
      <div className="flex flex-row h-full w-full flex-wrap justify-cente">
        <ResultsDetails data={scores} />
      </div>
    </>
  );
}

async function getResults(id: string) {
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
    if (answers.length < 3) {
      redirect("/");
    }
    const scores = getScores(answers, id);
    return scores;
  } catch (error) {
    console.log({ error });
    return null;
  }
}
