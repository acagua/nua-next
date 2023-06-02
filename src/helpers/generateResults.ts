import { attributesRefs } from "@/data/scores";
import { Answer, AttributeRefs, Attributes, Results } from "@/types/types";

const NEGATIVE_BASE = 6;
const QUESTION_MAX_SCORE = 5;

const getAttributeBase = (attribute: Attributes): number => {
  return attributesRefs.filter((attr) => attr.type === attribute).length; //.reduce((acc, curr) => acc + (curr.positive ? curr.score : NEGATIVE_BASE - curr.score), 0),
};

export const getScores = (answers: Answer[], id: string): Results => {
  const results: Results = {
    id,
    name: "",
    email: "",
    attributes: {
      [Attributes.RELATIONAL]: {
        min: getAttributeBase(Attributes.RELATIONAL),
        max: getAttributeBase(Attributes.RELATIONAL) * QUESTION_MAX_SCORE,
        score: 0,
        low: 14,
        high: 25,
        name: "Social",
      },
      [Attributes.EMOTIONAL]: {
        min: getAttributeBase(Attributes.EMOTIONAL),
        max: getAttributeBase(Attributes.EMOTIONAL) * QUESTION_MAX_SCORE,
        score: 0,
        low: 14,
        high: 25,
        name: "Emocional",
      },
      [Attributes.MENTAL]: {
        min: getAttributeBase(Attributes.MENTAL),
        max: getAttributeBase(Attributes.MENTAL) * QUESTION_MAX_SCORE,
        score: 0,
        low: 14,
        high: 25,
        name: "Cognitivo",
      },
      [Attributes.PHYSICAL]: {
        min: getAttributeBase(Attributes.PHYSICAL),
        max: getAttributeBase(Attributes.PHYSICAL) * QUESTION_MAX_SCORE,
        score: 0,
        low: 14,
        high: 25,
        name: "Físico",
      },
      [Attributes.FINANCIAL]: {
        min: getAttributeBase(Attributes.FINANCIAL),
        max: getAttributeBase(Attributes.FINANCIAL) * QUESTION_MAX_SCORE,
        score: 0,
        low: 14,
        high: 25,
        name: "Financiero",
      },
      [Attributes.BURNOUT]: {
        min: getAttributeBase(Attributes.BURNOUT),
        max: getAttributeBase(Attributes.BURNOUT) * QUESTION_MAX_SCORE,
        score: 0,
        low: 24,
        high: 41,
        name: "Burnout",
      },
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
