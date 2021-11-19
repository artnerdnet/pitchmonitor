import { getScalesWithinRange } from "../helpers/utils";
import { calcFrequencyFromRef } from "./frequencyCalculator";

// Credits https://www.youtube.com/watch?v=XCVY8eVwfvI&t=671s&ab_channel=MusicandCoding

export default calculateNotesFrequencies = () => { // Match all musical notes with their frequency
  const referenceA4NoteName = "A4";
  const referenceA4NoteHz = 440;
  const musicalNotes = getScalesWithinRange();
  const referenceNotePosition = musicalNotes.indexOf(referenceA4NoteName);
  const firstValue = -Math.abs(referenceNotePosition);

  let noteNameIndex = 0;
  let notesFrequencies = [];

  for (let i = firstValue; i < musicalNotes.length - referenceNotePosition; i++) {
    const frequencyCalculated = calcFrequencyFromRef(referenceA4NoteHz, i);
    notesFrequencies.push({
      note: musicalNotes[noteNameIndex],
      frequency: frequencyCalculated,
    });
    noteNameIndex++;
  }

  return notesFrequencies;
};
