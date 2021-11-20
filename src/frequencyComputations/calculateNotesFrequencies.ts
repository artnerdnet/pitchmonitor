import { TScaleWithFrequencies } from './../types';
import { getScalesWithinRange } from "../helpers/utils";
import { calcEqualTemperamentFreq } from "./calcEqualTemperamentFreq";
import { TNote } from '../types';
// Credits https://www.youtube.com/watch?v=XCVY8eVwfvI&t=671s&ab_channel=MusicandCoding

export const calculateNotesFrequencies = (referenceNote: TNote): TScaleWithFrequencies[] => { // Match all musical notes with their frequency
  const scale = getScalesWithinRange();
  const referenceNotePosition = scale.indexOf(referenceNote.name);
  const firstValue = -Math.abs(referenceNotePosition);

  let noteNameIndex = 0;
  let scaleWithFrequencies = [];

  for (let i = firstValue; i < scale.length - referenceNotePosition; i++) {
    const frequencyCalculated = calcEqualTemperamentFreq(referenceNote.frequencyInHz, i);
    scaleWithFrequencies.push({
      note: scale[noteNameIndex],
      frequency: frequencyCalculated,
    });
    noteNameIndex++;
  }

  return scaleWithFrequencies;
};
