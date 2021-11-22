import { TNotesFrequencies, TMaxMagnitude } from './../types';
export declare function interpretCorrelations(averageMagnitudeCalculation: number, maxMagnitude: TMaxMagnitude, notesFrequencies: TNotesFrequencies): number | void;
export declare const findDominantFrequency: (notesFrequencies: TNotesFrequencies, maxMagintudeIndex: number) => number;
