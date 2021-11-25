"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findClosestPitch = exports.calcNotesFreq = exports.calcEqualTemperamentFreq = void 0;
const constants_1 = require("./../helpers/constants");
const utils_1 = require("./../helpers/utils");
const helpers_1 = require("../helpers");
// Credits https://www.youtube.com/watch?v=XCVY8eVwfvI&t=671s&ab_channel=MusicandCoding
const calcEqualTemperamentFreq = (stepsBetweenNotes, referenceFrequency = helpers_1.referenceNote.frequencyInHz) => {
    const noteFrequency = Math.pow(2, 1 / 12); // Frequency for the semitone in equal temperament
    const intervalOfSemitones = referenceFrequency * Math.pow(noteFrequency, stepsBetweenNotes); // Calculate frequencies by equal temperament tuning scheme calculation fn = f0 * (A)n
    return (0, helpers_1.fixNumberDecimals)(intervalOfSemitones);
};
exports.calcEqualTemperamentFreq = calcEqualTemperamentFreq;
const calcNotesFreq = (note = helpers_1.referenceNote) => {
    const scale = (0, helpers_1.getScalesWithinRange)();
    const referenceNotePosition = scale.indexOf(note.name);
    const firstNote = -Math.abs(referenceNotePosition);
    let noteNameIndex = 0;
    let scaleWithFrequencies = [];
    for (let i = firstNote; i < scale.length - referenceNotePosition; i++) {
        const frequencyCalculated = (0, exports.calcEqualTemperamentFreq)(i, note.frequencyInHz);
        scaleWithFrequencies.push({
            name: scale[noteNameIndex],
            frequencyInHz: frequencyCalculated,
            onPitch: true,
            isFlat: false,
            isSharp: false,
        });
        noteNameIndex++;
    }
    return scaleWithFrequencies;
};
exports.calcNotesFreq = calcNotesFreq;
const findClosestPitch = (initialFreq, notes) => {
    for (let i = 0; i < notes.length; i++) {
        const previousNote = i === 0 ? notes[i] : notes[i - 1];
        const nextNote = notes.length === (i + 1) ? notes[i] : notes[i + 1];
        const isOnPitch = (0, utils_1.findDeviation)(initialFreq, constants_1.acceptableDeviationFromPitch, notes[i].frequencyInHz);
        if (isOnPitch) {
            return Object.assign(Object.assign({}, notes[i]), { inputInHz: initialFreq });
        }
        if ((0, utils_1.isNumberInBetween)(previousNote.frequencyInHz, nextNote.frequencyInHz, initialFreq)) {
            const closestFrequency = (0, utils_1.findClosestNumber)([previousNote.frequencyInHz, nextNote.frequencyInHz, notes[i].frequencyInHz], initialFreq);
            const closestPitchFound = [nextNote, previousNote, notes[i]].find((note) => note.frequencyInHz === closestFrequency);
            return Object.assign(Object.assign({}, closestPitchFound), { isSharp: initialFreq > closestFrequency, isFlat: initialFreq < closestFrequency, onPitch: false, inputInHz: initialFreq });
        }
    }
};
exports.findClosestPitch = findClosestPitch;
