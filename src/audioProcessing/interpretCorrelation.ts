import { TNotesFrequencies, TMaxMagnitude } from './../types';
import { MAGNITUDE_THRESHOLD } from '../helpers';

export function interpretCorrelations(averageMagnitudeCalculation: number, maxMagnitude: TMaxMagnitude, notesFrequencies: TNotesFrequencies): number | void {
  if (averageMagnitudeCalculation > MAGNITUDE_THRESHOLD) {
    return findDominantFrequency(notesFrequencies, maxMagnitude.maxIndexReached)
  };

  return null;
}

export const findDominantFrequency = (notesFrequencies: TNotesFrequencies, maxMagintudeIndex: number): number => (
  notesFrequencies[maxMagintudeIndex]
)
