export type TFrequency = number;

export type TAmplitudes = number[];

export type TComplexAmplitudes = number[][];

export type TMagnitudes = number[];

export type TReferenceFrequency = number;

export type TSemitone = number;

export type TNote = {
  name: string,
  frequencyInHz?: number
}

export type TNotesFrequencies = TNote[]

export type TScaleWithFrequencies = TNote[];

export type TMaxMagnitude = {
  strongestMagnitude: number,
  maxIndexReached: number
};

export type TAverageMagnitude = number;