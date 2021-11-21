import { referenceNote } from '../../helpers';
import { calcEqualTemperamentFreq, calcNotesFreq } from '..';

describe("audio magnitudes processing", () => {
  test("returns equal temperament frequency", () => {
    const frequencyCalculated = calcEqualTemperamentFreq(1, referenceNote.frequencyInHz);
    const frequencyExpected = 466.16;

    expect(frequencyCalculated).toEqual(frequencyExpected);
  });

  test("returns notes names and frequencies from a scale range", () => {
    const frequenciesCalculated = calcNotesFreq(referenceNote);
    const frequenciesExpected = [
      { note: 'C2', frequency: 65.41 },
      { note: 'C#2', frequency: 69.3 },
      { note: 'D2', frequency: 73.42 },
      { note: 'D#2', frequency: 77.78 },
      { note: 'E2', frequency: 82.41 },
      { note: 'F2', frequency: 87.31 },
      { note: 'F#2', frequency: 92.5 },
      { note: 'G2', frequency: 98 },
      { note: 'G#2', frequency: 103.83 },
      { note: 'A2', frequency: 110 },
      { note: 'A#2', frequency: 116.54 },
      { note: 'B2', frequency: 123.47 },
      { note: 'C3', frequency: 130.81 },
      { note: 'C#3', frequency: 138.59 },
      { note: 'D3', frequency: 146.83 },
      { note: 'D#3', frequency: 155.56 },
      { note: 'E3', frequency: 164.81 },
      { note: 'F3', frequency: 174.61 },
      { note: 'F#3', frequency: 185 },
      { note: 'G3', frequency: 196 },
      { note: 'G#3', frequency: 207.65 },
      { note: 'A3', frequency: 220 },
      { note: 'A#3', frequency: 233.08 },
      { note: 'B3', frequency: 246.94 },
      { note: 'C4', frequency: 261.63 },
      { note: 'C#4', frequency: 277.18 },
      { note: 'D4', frequency: 293.66 },
      { note: 'D#4', frequency: 311.13 },
      { note: 'E4', frequency: 329.63 },
      { note: 'F4', frequency: 349.23 },
      { note: 'F#4', frequency: 369.99 },
      { note: 'G4', frequency: 392 },
      { note: 'G#4', frequency: 415.3 },
      { note: 'A4', frequency: 440 },
      { note: 'A#4', frequency: 466.16 },
      { note: 'B4', frequency: 493.88 },
      { note: 'C5', frequency: 523.25 },
      { note: 'C#5', frequency: 554.37 },
      { note: 'D5', frequency: 587.33 },
      { note: 'D#5', frequency: 622.25 },
      { note: 'E5', frequency: 659.26 },
      { note: 'F5', frequency: 698.46 },
      { note: 'F#5', frequency: 739.99 },
      { note: 'G5', frequency: 783.99 },
      { note: 'G#5', frequency: 830.61 },
      { note: 'A5', frequency: 880 },
      { note: 'A#5', frequency: 932.33 },
      { note: 'B5', frequency: 987.77 },
      { note: 'C6', frequency: 1046.5 },
      { note: 'C#6', frequency: 1108.73 },
      { note: 'D6', frequency: 1174.66 },
      { note: 'D#6', frequency: 1244.51 },
      { note: 'E6', frequency: 1318.51 },
      { note: 'F6', frequency: 1396.91 },
      { note: 'F#6', frequency: 1479.98 },
      { note: 'G6', frequency: 1567.98 },
      { note: 'G#6', frequency: 1661.22 },
      { note: 'A6', frequency: 1760 },
      { note: 'A#6', frequency: 1864.66 },
      { note: 'B6', frequency: 1975.53 }
    ]
    expect(frequenciesCalculated).toEqual(frequenciesExpected);
  });
})

