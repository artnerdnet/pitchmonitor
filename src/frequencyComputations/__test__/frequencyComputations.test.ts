import { findClosestPitch } from './../frequencyComputations';
import { referenceNote } from '../../helpers';
import { calcEqualTemperamentFreq, calcNotesFreq } from '..';

const notesWithFrequencies = [
  { name: 'C2', frequencyInHz: 65.41, isFlat: false, isSharp: false, onPitch: true },
  { name: 'C#2', frequencyInHz: 69.3, isFlat: false, isSharp: false, onPitch: true },
  { name: 'D2', frequencyInHz: 73.42, isFlat: false, isSharp: false, onPitch: true },
  { name: 'D#2', frequencyInHz: 77.78, isFlat: false, isSharp: false, onPitch: true },
  { name: 'E2', frequencyInHz: 82.41, isFlat: false, isSharp: false, onPitch: true },
  { name: 'F2', frequencyInHz: 87.31, isFlat: false, isSharp: false, onPitch: true },
  { name: 'F#2', frequencyInHz: 92.5, isFlat: false, isSharp: false, onPitch: true },
  { name: 'G2', frequencyInHz: 98, isFlat: false, isSharp: false, onPitch: true },
  { name: 'G#2', frequencyInHz: 103.83, isFlat: false, isSharp: false, onPitch: true },
  { name: 'A2', frequencyInHz: 110, isFlat: false, isSharp: false, onPitch: true },
  { name: 'A#2', frequencyInHz: 116.54, isFlat: false, isSharp: false, onPitch: true },
  { name: 'B2', frequencyInHz: 123.47, isFlat: false, isSharp: false, onPitch: true },
  { name: 'C3', frequencyInHz: 130.81, isFlat: false, isSharp: false, onPitch: true },
  { name: 'C#3', frequencyInHz: 138.59, isFlat: false, isSharp: false, onPitch: true },
  { name: 'D3', frequencyInHz: 146.83, isFlat: false, isSharp: false, onPitch: true },
  { name: 'D#3', frequencyInHz: 155.56, isFlat: false, isSharp: false, onPitch: true },
  { name: 'E3', frequencyInHz: 164.81, isFlat: false, isSharp: false, onPitch: true },
  { name: 'F3', frequencyInHz: 174.61, isFlat: false, isSharp: false, onPitch: true },
  { name: 'F#3', frequencyInHz: 185, isFlat: false, isSharp: false, onPitch: true },
  { name: 'G3', frequencyInHz: 196, isFlat: false, isSharp: false, onPitch: true },
  { name: 'G#3', frequencyInHz: 207.65, isFlat: false, isSharp: false, onPitch: true },
  { name: 'A3', frequencyInHz: 220, isFlat: false, isSharp: false, onPitch: true },
  { name: 'A#3', frequencyInHz: 233.08, isFlat: false, isSharp: false, onPitch: true },
  { name: 'B3', frequencyInHz: 246.94, isFlat: false, isSharp: false, onPitch: true },
  { name: 'C4', frequencyInHz: 261.63, isFlat: false, isSharp: false, onPitch: true },
  { name: 'C#4', frequencyInHz: 277.18, isFlat: false, isSharp: false, onPitch: true },
  { name: 'D4', frequencyInHz: 293.66, isFlat: false, isSharp: false, onPitch: true },
  { name: 'D#4', frequencyInHz: 311.13, isFlat: false, isSharp: false, onPitch: true },
  { name: 'E4', frequencyInHz: 329.63, isFlat: false, isSharp: false, onPitch: true },
  { name: 'F4', frequencyInHz: 349.23, isFlat: false, isSharp: false, onPitch: true },
  { name: 'F#4', frequencyInHz: 369.99, isFlat: false, isSharp: false, onPitch: true },
  { name: 'G4', frequencyInHz: 392, isFlat: false, isSharp: false, onPitch: true },
  { name: 'G#4', frequencyInHz: 415.3, isFlat: false, isSharp: false, onPitch: true },
  { name: 'A4', frequencyInHz: 440, isFlat: false, isSharp: false, onPitch: true },
  { name: 'A#4', frequencyInHz: 466.16, isFlat: false, isSharp: false, onPitch: true },
  { name: 'B4', frequencyInHz: 493.88, isFlat: false, isSharp: false, onPitch: true },
  { name: 'C5', frequencyInHz: 523.25, isFlat: false, isSharp: false, onPitch: true },
  { name: 'C#5', frequencyInHz: 554.37, isFlat: false, isSharp: false, onPitch: true },
  { name: 'D5', frequencyInHz: 587.33, isFlat: false, isSharp: false, onPitch: true },
  { name: 'D#5', frequencyInHz: 622.25, isFlat: false, isSharp: false, onPitch: true },
  { name: 'E5', frequencyInHz: 659.26, isFlat: false, isSharp: false, onPitch: true },
  { name: 'F5', frequencyInHz: 698.46, isFlat: false, isSharp: false, onPitch: true },
  { name: 'F#5', frequencyInHz: 739.99, isFlat: false, isSharp: false, onPitch: true },
  { name: 'G5', frequencyInHz: 783.99, isFlat: false, isSharp: false, onPitch: true },
  { name: 'G#5', frequencyInHz: 830.61, isFlat: false, isSharp: false, onPitch: true },
  { name: 'A5', frequencyInHz: 880, isFlat: false, isSharp: false, onPitch: true },
  { name: 'A#5', frequencyInHz: 932.33, isFlat: false, isSharp: false, onPitch: true },
  { name: 'B5', frequencyInHz: 987.77, isFlat: false, isSharp: false, onPitch: true },
  { name: 'C6', frequencyInHz: 1046.5, isFlat: false, isSharp: false, onPitch: true },
  { name: 'C#6', frequencyInHz: 1108.73, isFlat: false, isSharp: false, onPitch: true },
  { name: 'D6', frequencyInHz: 1174.66, isFlat: false, isSharp: false, onPitch: true },
  { name: 'D#6', frequencyInHz: 1244.51, isFlat: false, isSharp: false, onPitch: true },
  { name: 'E6', frequencyInHz: 1318.51, isFlat: false, isSharp: false, onPitch: true },
  { name: 'F6', frequencyInHz: 1396.91, isFlat: false, isSharp: false, onPitch: true },
  { name: 'F#6', frequencyInHz: 1479.98, isFlat: false, isSharp: false, onPitch: true },
  { name: 'G6', frequencyInHz: 1567.98, isFlat: false, isSharp: false, onPitch: true },
  { name: 'G#6', frequencyInHz: 1661.22, isFlat: false, isSharp: false, onPitch: true },
  { name: 'A6', frequencyInHz: 1760, isFlat: false, isSharp: false, onPitch: true },
  { name: 'A#6', frequencyInHz: 1864.66, isFlat: false, isSharp: false, onPitch: true },
  { name: 'B6', frequencyInHz: 1975.53, isFlat: false, isSharp: false, onPitch: true },
]

describe("audio magnitudes processing", () => {
  test("returns equal temperament frequency", () => {
    const frequencyCalculated = calcEqualTemperamentFreq(1, referenceNote.frequencyInHz);
    const frequencyExpected = 466.16;

    expect(frequencyCalculated).toEqual(frequencyExpected);
  });


  test("returns notes names and frequencies from a scale range", () => {
    const frequenciesCalculated = calcNotesFreq(referenceNote);

    expect(frequenciesCalculated).toEqual(notesWithFrequencies);
  });

  test("returns note when on pitch", () => {
    const pitchFound = findClosestPitch(1662.02, notesWithFrequencies);
    const expected = { name: 'G#6', frequencyInHz: 1661.22, isFlat: false, isSharp: false, onPitch: true }

    expect(pitchFound).toEqual(expected);
  });

  test("returns closest note with sharp indication when note is above the pitch", () => {
    const pitchFound = findClosestPitch(1760.9, notesWithFrequencies);
    const expected = { name: 'A6', frequencyInHz: 1760, isFlat: false, isSharp: true, onPitch: false }

    expect(pitchFound).toEqual(expected);
  });

  test("returns closest note with flat indication when note is below the pitch", () => {
    const pitchFound = findClosestPitch(1759.8, notesWithFrequencies);
    const expected = { name: 'A6', frequencyInHz: 1760, isFlat: false, isSharp: true, onPitch: false }

    expect(pitchFound).toEqual(expected);
  });
})

