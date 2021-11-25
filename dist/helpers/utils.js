"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDeviation = exports.findClosestNumber = exports.isNumberInBetween = exports.getAllFrequencies = exports.fixNumberDecimals = exports.getScalesWithinRange = void 0;
const _1 = require(".");
const getScalesWithinRange = (startNote = "C2", endNote = "B6") => {
    const notesArray = [];
    let startOctave = parseInt(startNote.slice(-1));
    let endOctave = parseInt(endNote.slice(-1));
    for (let octave = startOctave; octave <= endOctave; octave++) {
        _1.NOTES.forEach((note) => {
            notesArray.push(note + octave);
        });
    }
    return notesArray;
};
exports.getScalesWithinRange = getScalesWithinRange;
const fixNumberDecimals = (num, fixAmount = 2) => {
    return Number(num.toFixed(fixAmount));
};
exports.fixNumberDecimals = fixNumberDecimals;
const getAllFrequencies = (notes) => (notes.map(note => note.frequencyInHz));
exports.getAllFrequencies = getAllFrequencies;
const isNumberInBetween = (firstValueToCompare, secondValueToCompare, valueInput) => {
    const min = Math.min.apply(Math, [firstValueToCompare, secondValueToCompare]);
    const max = Math.max.apply(Math, [firstValueToCompare, secondValueToCompare]);
    return valueInput > min && valueInput < max;
};
exports.isNumberInBetween = isNumberInBetween;
const findClosestNumber = (values, valueInput) => {
    const valueDifference = values.map(number => {
        return Math.abs(valueInput - number);
    });
    const lowerNumberIndex = valueDifference.indexOf(Math.min.apply(Math, valueDifference));
    return values[lowerNumberIndex];
};
exports.findClosestNumber = findClosestNumber;
const findDeviation = (value, deviation, referenceValue) => (value - referenceValue <= deviation || value + referenceValue <= deviation) ? true : false;
exports.findDeviation = findDeviation;
