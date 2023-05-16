import { AttributeRefs, Attributes } from "@/types/types";

export enum Scores {
  ATTRIBUTE_LOW = 24,
  ATTRIBUTE_HIGH = 41,
  TOTAL_LOW = 100,
  TOTAL_HIGH = 201,
}

export const relationalRefs: AttributeRefs = {
  type: Attributes.RELATIONAL,
  refs: [
    "5fc966d8-febf-4f14-a07a-c5ba4950770b",
    "95676b40-1eb5-4d2f-be0b-cd74f59e0598",
  ],
};

export const emotionalRefs = {
  type: Attributes.EMOTIONAL,
  refs: [
    "b9524a55-d494-4b77-9c05-e1dab061b2e9",
    "395c0791-9b57-4cd6-b334-f09f0f5b05ed",
  ],
};

export const mentalRefs = {
  type: Attributes.MENTAL,
  refs: [
    "c4f710dc-7643-4db9-a2eb-5374ccb42164",
    "16114d1c-8a7d-4884-8bf3-115605993b32",
  ],
};

export const physicalRefs = {
  type: Attributes.PHYSICAL,
  refs: [
    "bf694007-ae55-4d82-b970-af0b1cc15e97",
    "339a072f-40e0-43b7-b294-b441fe17ec5a",
  ],
};

export const financialRefs = {
  type: Attributes.FINANCIAL,
  refs: [
    "8a4d2b17-a1cd-41c7-833a-2675c83df2f2",
    "06945f5c-3074-40c0-ad73-c0d59d2e793a",
  ],
};
