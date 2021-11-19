import { TNotesFrequencies } from './types';
// Credits: jonathan.bergknoff.com/journal/making-a-guitar-tuner-html5

export const calculateAmplitudes = (buffer: AudioBuffer, notesFrequencies: TNotesFrequencies, sampleRate: number) => {
  const scaleFactor = (2 * Math.PI) / sampleRate;
  console.log(buffer, 'buffer')
  return notesFrequencies.map((note) => {
    console.log(note, 'note')
    const { frequency } = note;
    const cosineAndSineValues = [0, 0];

    for (let t = 0; t < buffer.length; t++) {
      console.log(buffer[t], 'buffer[t]')

      cosineAndSineValues[0] +=
        buffer[t] * Math.cos(scaleFactor * frequency * t);
      cosineAndSineValues[1] +=
        buffer[t] * Math.sin(scaleFactor * frequency * t);
    }
    console.log(cosineAndSineValues, 'cosineAndSineValues')
    return cosineAndSineValues;
  });
}