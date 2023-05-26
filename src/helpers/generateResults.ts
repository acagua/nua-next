import { attributesRefs } from "@/data/scores";
import { Answer, AttributeRefs, Attributes, Results } from "@/types/types";

const NEGATIVE_BASE = 6;

export const getScores = (answers: Answer[]): Results => {
  const results: Results = {
    name: "",
    email: "",
    attributes: {
      [Attributes.RELATIONAL]: { min: 6, max: 30, score: 0, low: 14, high: 25 },
      [Attributes.EMOTIONAL]: { min: 6, max: 30, score: 0, low: 14, high: 25 },
      [Attributes.MENTAL]: { min: 6, max: 30, score: 0, low: 14, high: 25 },
      [Attributes.PHYSICAL]: { min: 6, max: 30, score: 0, low: 14, high: 25 },
      [Attributes.FINANCIAL]: { min: 6, max: 30, score: 0, low: 14, high: 25 },
      [Attributes.BURNOUT]: { min: 10, max: 50, score: 0, low: 24, high: 41 },
    },
  };

  answers.forEach((answer) => {
    const { field, text, number, email } = answer;
    if (field.ref === "01H0TC37RA40ADR9G6BWYBS9HN") {
      results.name = text;
      return;
    }
    if (field.ref === "feb13484-0bce-4cab-a4f1-1ff30e5d0cfd") {
      results.email = email;
      return;
    }
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
      results.attributes[attributeRef.type].score += attributeRef.positive
        ? score
        : NEGATIVE_BASE - score;
    }
  });
};
