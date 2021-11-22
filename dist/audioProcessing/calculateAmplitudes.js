"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAmplitudes = void 0;
// Credits: jonathan.bergknoff.com/journal/making-a-guitar-tuner-html5
const calculateAmplitudes = (buffer, notesFrequencies, sampleRate) => {
    const scaleFactor = (2 * Math.PI) / sampleRate;
    return notesFrequencies.map((frequencyInHz) => {
        const cosineAndSineValues = [0, 0];
        for (let t = 0; t < buffer.length; t++) {
            cosineAndSineValues[0] +=
                buffer[t] * Math.cos(scaleFactor * frequencyInHz * t);
            cosineAndSineValues[1] +=
                buffer[t] * Math.sin(scaleFactor * frequencyInHz * t);
        }
        return cosineAndSineValues;
    });
};
exports.calculateAmplitudes = calculateAmplitudes;
