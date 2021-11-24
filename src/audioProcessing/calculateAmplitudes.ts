import { TNotesFrequencies, TComplexAmplitudes } from '../types';
// Credits: jonathan.bergknoff.com/journal/making-a-guitar-tuner-html5

export const calculateAmplitudes = (buffer: number[], notesFrequencies: TNotesFrequencies, sampleRate: number): TComplexAmplitudes => {
  const scaleFactor = (2 * Math.PI) / sampleRate;

  return notesFrequencies.map((note) => {
    const { frequencyInHz } = note;
    const cosineAndSineValues = [0, 0];

    for (let t = 0; t < buffer.length; t++) {
      cosineAndSineValues[0] +=
        buffer[t] * Math.cos(scaleFactor * frequencyInHz * t);
      cosineAndSineValues[1] +=
        buffer[t] * Math.sin(scaleFactor * frequencyInHz * t);
    }

    return cosineAndSineValues;
  });
}