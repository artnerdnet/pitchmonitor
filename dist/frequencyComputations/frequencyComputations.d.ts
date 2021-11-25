import { TScaleWithFrequencies, TNote } from '../types';
export declare const calcEqualTemperamentFreq: (stepsBetweenNotes: number, referenceFrequency?: number) => number;
export declare const calcNotesFreq: (note?: TNote) => TScaleWithFrequencies[];
export declare const findClosestPitch: (initialFreq: number, notes: TNote[]) => {
    isFlat: boolean;
    isSharp: boolean;
    onPitch: boolean;
    name: string;
    frequencyInHz?: number;
};
