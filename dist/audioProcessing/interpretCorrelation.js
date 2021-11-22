"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDominantFrequency = exports.interpretCorrelations = void 0;
const helpers_1 = require("../helpers");
function interpretCorrelations(averageMagnitudeCalculation, maxMagnitude, notesFrequencies) {
    if (averageMagnitudeCalculation > helpers_1.MAGNITUDE_THRESHOLD) {
        return (0, exports.findDominantFrequency)(notesFrequencies, maxMagnitude.maxIndexReached);
    }
    ;
    return null;
}
exports.interpretCorrelations = interpretCorrelations;
const findDominantFrequency = (notesFrequencies, maxMagintudeIndex) => (notesFrequencies[maxMagintudeIndex]);
exports.findDominantFrequency = findDominantFrequency;
