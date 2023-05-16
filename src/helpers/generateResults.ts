import {
  relationalRefs,
  emotionalRefs,
  mentalRefs,
  physicalRefs,
  financialRefs,
} from "@/data/scores";
import { Answer, AttributeRefs, Attributes, Results } from "@/types/types";

export const getScores = (answers: Answer[]): Results => {
  const results: Results = {
    name: "",
    email: "",
    attributes: {
      [Attributes.RELATIONAL]: 0,
      [Attributes.EMOTIONAL]: 0,
      [Attributes.MENTAL]: 0,
      [Attributes.PHYSICAL]: 0,
      [Attributes.FINANCIAL]: 0,
    },
  };

  answers.forEach((answer) => {
    const { field, type, text, email, number } = answer;
    if (type === "text") {
      results.name = text;
      return;
    }
    if (type === "email") {
      results.email = email;
      return;
    }
    addAttributeScore(relationalRefs, field.ref, results, number);
    addAttributeScore(emotionalRefs, field.ref, results, number);
    addAttributeScore(mentalRefs, field.ref, results, number);
    addAttributeScore(physicalRefs, field.ref, results, number);
    addAttributeScore(financialRefs, field.ref, results, number);
  });
  return results;
};

const addAttributeScore = (
  attributeRefs: AttributeRefs,
  ref: string,
  results: Results,
  score: number
) => {
  if (attributeRefs.refs.includes(ref)) {
    results.attributes[attributeRefs.type] += score;
  }
};
