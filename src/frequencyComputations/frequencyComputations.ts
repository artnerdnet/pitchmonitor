import { TScaleWithFrequencies, TNote } from '../types';
import { fixNumberDecimals, getScalesWithinRange, referenceNote } from '../helpers';

// Credits https://www.youtube.com/watch?v=XCVY8eVwfvI&t=671s&ab_channel=MusicandCoding

export const calcEqualTemperamentFreq = (stepsBetweenNotes: number, referenceFrequency: number = referenceNote.frequencyInHz): number => {
  const noteFrequency = Math.pow(2, 1 / 12); // Frequency for the semitone in equal temperament

  const intervalOfSemitones = referenceFrequency * Math.pow(noteFrequency, stepsBetweenNotes); // Calculate frequencies by equal temperament tuning scheme calculation fn = f0 * (A)n

  return fixNumberDecimals(intervalOfSemitones);
};

export const calcNotesFreq = (note: TNote = referenceNote): TScaleWithFrequencies[] => { // Match all musical notes with their frequency
  const scale = getScalesWithinRange();
  const referenceNotePosition = scale.indexOf(note.name);
  const firstNote = -Math.abs(referenceNotePosition);

  let noteNameIndex = 0;
  let scaleWithFrequencies = [];

  for (let i = firstNote; i < scale.length - referenceNotePosition; i++) {
    const frequencyCalculated = calcEqualTemperamentFreq(i, note.frequencyInHz);
    scaleWithFrequencies.push({
      note: scale[noteNameIndex],
      frequency: frequencyCalculated,
    });
    noteNameIndex++;
  }

  return scaleWithFrequencies;
};
