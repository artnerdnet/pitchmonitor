import { fixNumberDecimals } from "../../utils/helpers";

// Credits: https://www.youtube.com/watch?v=XCVY8eVwfvI&t=671s&ab_channel=MusicandCoding

export const calcFrequencyFromRef = (referenceFrequency, steps) => { // Calculate frequencies by equal temperament tuning scheme calculation fn = f0 * (A)n
  const A = Math.pow(2, 1 / 12);

  const frequencyCalculated = referenceFrequency * Math.pow(A, steps);

  return fixNumberDecimals(frequencyCalculated);
};