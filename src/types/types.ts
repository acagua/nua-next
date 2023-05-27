type Type = "text" | "email" | "number" | "choice";

export enum Attributes {
  RELATIONAL = "relational",
  EMOTIONAL = "emotional",
  MENTAL = "mental",
  PHYSICAL = "physical",
  FINANCIAL = "financial",
  BURNOUT = "burnout",
}

export type Score = {
  min: number;
  max: number;
  score: number;
  low: number;
  high: number;
};

export type AttributeScore = {
  [key in Attributes]: Score;
};

export type Results = {
  name: string;
  email: string;
  attributes: AttributeScore;
};

export type AttributeRefs = {
  id: string;
  positive: boolean;
  type: Attributes;
};

export type ScoreMessages = {
  low: string;
  medium: string;
  high: string;
};

export type TypeFormResponse = {
  total_items: number;
  page_count: number;
  items: [
    {
      landing_id: string;
      token: string;
      response_id: string;
      landed_at: Date;
      submitted_at: Date;
      // metadata: {
      //     user_agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36,
      //     platform: other,
      //     referer: https://form.typeform.com/to/mLhVlARm?typeform-embed-id=23573794338067144&typeform-embed=embed-widget&typeform-source=localhost&typeform-medium=embed-sdk&typeform-medium-version=next,
      //     network_id: 70a70c769c,
      //     browser: default
      // },
      // hidden: {},
      calculated: {
        score: number;
      };
      answers: Answer[];
    }
  ];
};

export type Answer = {
  field: { ref: string };
  type: Type;
  text: string;
  email: string;
  number: number;
};
