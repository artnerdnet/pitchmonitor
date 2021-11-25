import { TNote } from "../types";
export declare const getScalesWithinRange: (startNote?: string, endNote?: string) => any[];
export declare const fixNumberDecimals: (num: any, fixAmount?: number) => number;
export declare const getAllFrequencies: (notes: TNote[]) => number[];
export declare const isNumberInBetween: (firstValueToCompare: number, secondValueToCompare: number, valueInput: number) => boolean;
export declare const findClosestNumber: (values: number[], valueInput: number) => number;
export declare const findDeviation: (value: number, deviation: number, referenceValue: number) => boolean;
export declare const findPreviousAndNextNote: (notes: TNote[], currentNote: TNote) => {
    nextNote: TNote;
    previousNote?: undefined;
} | {
    previousNote: TNote;
    nextNote?: undefined;
} | {
    previousNote: TNote;
    nextNote: TNote;
};
