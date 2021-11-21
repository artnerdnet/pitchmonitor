import { TNotesFrequencies, TMaxMagnitude } from './../types';

export function interpretCorrelations(averageMagnitudeCalculation: number, maxMagnitude: TMaxMagnitude, notesFrequencies: TNotesFrequencies): number | void {
  const magnitudeThreshold = 30; // limit of magnitudes to process

  if (averageMagnitudeCalculation > magnitudeThreshold) {
    return findDominantFrequency(notesFrequencies, maxMagnitude.maxIndexReached)
  };

  return null;
}

export const findDominantFrequency = (notesFrequencies: TNotesFrequencies, maxMagintudeIndex: number): number => (
  notesFrequencies[maxMagintudeIndex]
)
