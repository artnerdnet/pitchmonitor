import { TMaxMagnitude, TComplexAmplitudes, TMagnitudes, TAverageMagnitude } from './../types';
export declare const computeMagnitudes: (amplitudes: TComplexAmplitudes) => TMagnitudes;
export declare const calculateAverageMagnitudeValues: (magnitudes: TMagnitudes, maxMagnitude: number) => TAverageMagnitude;
export declare const findMaximumMagnitude: (magnitudes: number[]) => TMaxMagnitude;
