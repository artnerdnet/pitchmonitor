export declare type TFrequency = number;
export declare type TAmplitudes = number[];
export declare type TComplexAmplitudes = number[][];
export declare type TMagnitudes = number[];
export declare type TReferenceFrequency = number;
export declare type TSemitone = number;
export declare type TNote = {
    name: string;
    frequencyInHz?: number;
    onPitch?: boolean;
    isFlat?: boolean;
    isSharp?: boolean;
};
export declare type TNotesFrequencies = TNote[];
export declare type TScaleWithFrequencies = TNote[];
export declare type TMaxMagnitude = {
    strongestMagnitude: number;
    maxIndexReached: number;
};
export declare type TAverageMagnitude = number;
