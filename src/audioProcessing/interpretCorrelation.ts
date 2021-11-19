import { calculateAverageMagnitudeValues, computeMagnitudes, getMaximumMagnitude } from './calculateMagnitudes';

export function interpretCorrelations(frequencyAmplitudes: number[], notesFrequencies: number[]) {
  const magnitudes = computeMagnitudes(frequencyAmplitudes);
  const maxMagnitude = getMaximumMagnitude(magnitudes);
  const referenceOfMagnitudeThreshold = 30; // limit of magnitudes to process
  const averageMagnitudeCalculation = calculateAverageMagnitudeValues(
    magnitudes,
    maxMagnitude.strongestMagnitude
  );

  if (averageMagnitudeCalculation > referenceOfMagnitudeThreshold) {
    const dominantFrequency = notesFrequencies[maxMagnitude.maxIndexReached];

    return dominantFrequency;
  }
}
