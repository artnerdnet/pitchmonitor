import { TScaleWithFrequencies, TNote } from '../types';
export declare const calcEqualTemperamentFreq: (stepsBetweenNotes: number, referenceFrequency?: number) => number;
export declare const calcNotesFreq: (note?: TNote) => TScaleWithFrequencies[];
