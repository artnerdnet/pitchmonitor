import { acceptableDeviationFromPitch } from './../helpers/constants';
import { isNumberInBetween, findClosestNumber, findDeviation } from './../helpers/utils';
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
      name: scale[noteNameIndex],
      frequencyInHz: frequencyCalculated,
      onPitch: true,
      isFlat: false,
      isSharp: false,
    });
    noteNameIndex++;
  }

  return scaleWithFrequencies;
};

export const findClosestPitch = (initialFreq: number, notes: TNote[]) => {
  for (let i = 0; i < notes.length; i++) {
    const previousNote = i === 0 ? notes[i] : notes[i - 1];
    const nextNote = notes.length === (i + 1) ? notes[i] : notes[i + 1];
    const isOnPitch = findDeviation(initialFreq, acceptableDeviationFromPitch, notes[i].frequencyInHz);

    if (isOnPitch) {
      return notes[i];
    }

    if (isNumberInBetween(previousNote.frequencyInHz, nextNote.frequencyInHz, initialFreq)) {
      const closestFrequency = findClosestNumber([previousNote.frequencyInHz, nextNote.frequencyInHz, notes[i].frequencyInHz], initialFreq);
      const closestPitchFound = [nextNote, previousNote, notes[i]].find((note) =>
        note.frequencyInHz === closestFrequency
      );

      let updatedNote = {
        ...closestPitchFound,
        isFlat: false,
        isSharp: false,
        onPitch: false,
      }

      closestFrequency === previousNote.frequencyInHz ?
        updatedNote = {
          ...updatedNote,
          isFlat: true
        }
        : updatedNote = {
          ...updatedNote,
          isSharp: true
        };

      return updatedNote;
    }
  }
}
