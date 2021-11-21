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
