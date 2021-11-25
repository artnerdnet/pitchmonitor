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

export const findClosestNumber = (firstValueToCompare: number, secondValueToCompare: number, valueInput: number) => {
  if (valueInput === firstValueToCompare || valueInput === secondValueToCompare) {
    return valueInput;
  }
  const firstValue = Math.abs(valueInput - firstValueToCompare);
  const secondValue = Math.abs(valueInput - secondValueToCompare);

  const closestNumber = Math.min.apply(Math, [firstValue, secondValue]) === firstValue ? firstValueToCompare : secondValueToCompare;
  return closestNumber;
}