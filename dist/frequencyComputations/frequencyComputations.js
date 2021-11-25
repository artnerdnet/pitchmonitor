"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findClosestPitch = exports.calcNotesFreq = exports.calcEqualTemperamentFreq = void 0;
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
        if ((0, utils_1.isNumberInBetween)(previousNote.frequencyInHz, nextNote.frequencyInHz, initialFreq)) {
            const closestFrequency = (0, utils_1.findClosestNumber)(previousNote.frequencyInHz, nextNote.frequencyInHz, initialFreq);
            const closestPitchFound = [nextNote, previousNote].find((note) => note.frequencyInHz === closestFrequency);
            let updatedNote = Object.assign(Object.assign({}, closestPitchFound), { isFlat: false, isSharp: false, onPitch: false });
            closestFrequency === previousNote.frequencyInHz ?
                updatedNote = Object.assign(Object.assign({}, updatedNote), { isFlat: true })
                : updatedNote = Object.assign(Object.assign({}, updatedNote), { isSharp: true });
            return updatedNote;
        }
    }
};
exports.findClosestPitch = findClosestPitch;
