"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcNotesFreq = exports.calcEqualTemperamentFreq = void 0;
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
            note: scale[noteNameIndex],
            frequency: frequencyCalculated,
        });
        noteNameIndex++;
    }
    return scaleWithFrequencies;
};
exports.calcNotesFreq = calcNotesFreq;
