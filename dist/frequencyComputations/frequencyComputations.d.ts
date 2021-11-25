import { TScaleWithFrequencies, TNote } from '../types';
export declare const calcEqualTemperamentFreq: (stepsBetweenNotes: number, referenceFrequency?: number) => number;
export declare const calcNotesFreq: (note?: TNote) => TScaleWithFrequencies[];
export declare const findClosestPitch: (initialFreq: number, notes: TNote[]) => {
    inputInHz: number;
    name: string;
    frequencyInHz?: number;
    onPitch?: boolean;
    isFlat?: boolean;
    isSharp?: boolean;
};
