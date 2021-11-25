export { getScalesWithinRange, fixNumberDecimals, getAllFrequencies, isNumberInBetween, findDeviation, findClosestNumber, findPreviousAndNextNote } from './helpers/utils';
export { NOTES, referenceNote, MAGNITUDE_THRESHOLD, acceptableDeviationFromPitch } from './helpers/constants';
export { calculateAmplitudes } from './audioProcessing/calculateAmplitudes';
export { interpretCorrelations, findDominantFrequency } from './audioProcessing/interpretCorrelation';
export { computeMagnitudes, calculateAverageMagnitudeValues, findMaximumMagnitude } from './audioProcessing/calculateMagnitudes';
export { calcNotesFreq, calcEqualTemperamentFreq, findClosestPitch } from './frequencyComputations/frequencyComputations';
