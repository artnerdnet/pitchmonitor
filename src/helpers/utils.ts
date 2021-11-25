import { NOTES } from ".";
import { TNote } from "../types";

export const getScalesWithinRange = (startNote = "C2", endNote = "B6") => {
  const notesArray = [];
  let startOctave = parseInt(startNote.slice(-1));
  let endOctave = parseInt(endNote.slice(-1));

  for (let octave = startOctave; octave <= endOctave; octave++) {
    NOTES.forEach((note) => {
      notesArray.push(note + octave);
    });
  }

  return notesArray;
};

export const fixNumberDecimals = (num, fixAmount = 2) => {
  return Number(num.toFixed(fixAmount));
};

export const getAllFrequencies = (notes: TNote[]) => (
  notes.map(note => note.frequencyInHz)
);

export const isNumberInBetween = (firstValueToCompare: number, secondValueToCompare: number, valueInput: number) => {
  const min = Math.min.apply(Math, [firstValueToCompare, secondValueToCompare]);
  const max = Math.max.apply(Math, [firstValueToCompare, secondValueToCompare]);
  return valueInput > min && valueInput < max;
};

export const findClosestNumber = (values: number[], valueInput: number) => {
  const valueDifference = values.map(number => {
    return Math.abs(valueInput - number)
  })
  const lowerNumberIndex = valueDifference.indexOf(Math.min.apply(Math, valueDifference));

  return values[lowerNumberIndex];
};

export const findDeviation = (value: number, deviation: number, referenceValue: number) => (value - referenceValue <= deviation || value + referenceValue <= deviation) ? true : false

