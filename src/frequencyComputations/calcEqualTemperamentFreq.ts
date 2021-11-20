import { fixNumberDecimals, referenceNote } from '../helpers/utils';

// Credits: https://www.youtube.com/watch?v=XCVY8eVwfvI&t=671s&ab_channel=MusicandCoding

export const calcEqualTemperamentFreq = (referenceFrequency: number = referenceNote.frequencyInHz, stepsBetweenNotes: number): number => {
  const noteFrequency = Math.pow(2, 1 / 12); // Frequency for the semitone in equal temperament

  const intervalOfSemitones = referenceFrequency * Math.pow(noteFrequency, stepsBetweenNotes); // Calculate frequencies by equal temperament tuning scheme calculation fn = f0 * (A)n

  return fixNumberDecimals(intervalOfSemitones);
};