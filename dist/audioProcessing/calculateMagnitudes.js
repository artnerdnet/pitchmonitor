"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMaximumMagnitude = exports.calculateAverageMagnitudeValues = exports.computeMagnitudes = void 0;
const computeMagnitudes = (amplitudes) => {
    const magnitudes = amplitudes.map((amplitude) => {
        return amplitude[0] * amplitude[0] + amplitude[1] * amplitude[1];
    });
    return magnitudes;
};
exports.computeMagnitudes = computeMagnitudes;
const calculateAverageMagnitudeValues = (magnitudes, maxMagnitude) => {
    const averageMagnitude = magnitudes.reduce(function (a, b) {
        return a + b;
    }, 0) / magnitudes.length; // find the average magnitude of all magnitudes
    const referenceOfMagnitudeOnAverage = maxMagnitude / averageMagnitude; // calculate the weight of the maxixum magnitude in relation with the average magnitude
    return referenceOfMagnitudeOnAverage;
};
exports.calculateAverageMagnitudeValues = calculateAverageMagnitudeValues;
const findMaximumMagnitude = (magnitudes) => {
    let maxIndexReached = -1;
    let strongestMagnitude = 0;
    for (let i = 0; i < magnitudes.length; i++) {
        // find the highest magnitude between 0 and -1
        if (magnitudes[i] <= strongestMagnitude) {
            continue;
        }
        maxIndexReached = i; // Assign an index to the magnitude found, to be able to find the matching frequency later
        strongestMagnitude = magnitudes[i];
    }
    return { strongestMagnitude, maxIndexReached };
};
exports.findMaximumMagnitude = findMaximumMagnitude;
