import { TMaxMagnitude } from './../types';
import { MAGNITUDE_THRESHOLD } from '../helpers';

export function interpretCorrelations(averageMagnitudeCalculation: number, maxMagnitude: TMaxMagnitude, notesFrequencies: number[]): number | void {
  if (averageMagnitudeCalculation > MAGNITUDE_THRESHOLD) {
    return findDominantFrequency(notesFrequencies, maxMagnitude.maxIndexReached)
  };

  return null;
}

export const findDominantFrequency = (notesFrequencies: number[], maxMagintudeIndex: number): number => (
  notesFrequencies[maxMagintudeIndex]
)
