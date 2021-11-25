import { isNumberInBetween, findClosestNumber } from './../utils';
import { getScalesWithinRange } from './..';
import { fixNumberDecimals, getAllFrequencies } from '..';

describe("test utils", () => {
  test("returns number with two decimals", () => {
    const fixedNumber = fixNumberDecimals(1.123456789);
    const result = 1.12

    expect(fixedNumber).toBe(result);
  });

  test("return an array of scales within a range", () => {
    const scales = getScalesWithinRange("C2", "B2");
    const secondScale = ["C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2"]

    expect(scales).toEqual(secondScale);
  });

  test("return an array of frequencies from notes array", () => {
    const B3ToC4Frequencies = [{ name: 'B3', frequencyInHz: 246.94 }, { name: 'C4', frequencyInHz: 761.63 }]
    const frequencies = getAllFrequencies(B3ToC4Frequencies);
    const frequenciesExpected = [246.94, 761.63]

    expect(frequencies).toEqual(frequenciesExpected);
  });

  test("return true if number is between two values", () => {
    expect(isNumberInBetween(1, 2, 1.5)).toEqual(true);
  });

  test("return false if number is not between two values", () => {
    expect(isNumberInBetween(1, 2, 3)).toEqual(false);
  });

  test("return closest value to each of the numbers", () => {
    const foundNumber = findClosestNumber(2, 1, 1.2)
    const closestNumberExpected = 1;
    const foundHigherNumber = findClosestNumber(2, 1, 1.8)
    const closestHigherNumberExpected = 2;

    expect(foundNumber).toEqual(closestNumberExpected);
    expect(foundHigherNumber).toEqual(closestHigherNumberExpected);
  });
  test("return same value if number is equal to any of the numbers", () => {
    const foundNumber = findClosestNumber(2, 1, 1)
    const closestNumberExpected = 1;
    const foundHigherNumber = findClosestNumber(2, 1, 2)
    const closestHigherNumberExpected = 2;

    expect(foundNumber).toEqual(closestNumberExpected);
    expect(foundHigherNumber).toEqual(closestHigherNumberExpected);
  });
});