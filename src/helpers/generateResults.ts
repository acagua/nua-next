import { attributesRefs } from "@/data/scores";
import { Answer, AttributeRefs, Attributes, Results } from "@/types/types";

const NEGATIVE_BASE = 6;

export const getScores = (answers: Answer[]): Results => {
  const results: Results = {
    name: "",
    // email: "",
    attributes: {
      [Attributes.RELATIONAL]: 0,
      [Attributes.EMOTIONAL]: 0,
      [Attributes.MENTAL]: 0,
      [Attributes.PHYSICAL]: 0,
      [Attributes.FINANCIAL]: 0,
      [Attributes.BURNOUT]: 0,
    },
  };

  answers.forEach((answer) => {
    const { field, text, number /*, email*/ } = answer;
    if (field.ref === "01H0TC37RA40ADR9G6BWYBS9HN") {
      results.name = text;
      return;
    }
    // if (field.ref === "feb13484-0bce-4cab-a4f1-1ff30e5d0cfd") {
    //   results.email = email;
    //   return;
    // }
    addAttributeScore(attributesRefs, field.ref, results, number);
  });
  return results;
};

const addAttributeScore = (
  attributeRefs: AttributeRefs[],
  ref: string,
  results: Results,
  score: number
) => {
  attributeRefs.forEach((attributeRef) => {
    if (attributeRef.id === ref) {
      results.attributes[attributeRef.type] += attributeRef.positive
        ? score
        : NEGATIVE_BASE - score;
    }
  });
};
