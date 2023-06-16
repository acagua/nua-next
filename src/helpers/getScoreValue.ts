import { scoreColors } from "@/data/scores";
import { Score } from "@/types/types";

export function percentageToValue(percentage: number) {
  if (percentage >= 80) {
    return 5;
  }
  if (percentage >= 60) {
    return 4;
  }
  if (percentage >= 40) {
    return 3;
  }
  if (percentage >= 20) {
    return 2;
  }
  return 1;
}

export function percentageToColor(
  attribute: Score,
  colors: typeof scoreColors
) {
  if (attribute.score > attribute.high) {
    return colors.high;
  }
  if (attribute.score > attribute.low) {
    return colors.medium;
  }
  return colors.low;
}
