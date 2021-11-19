import { fixNumberDecimals, getScalesWithinRange } from '../utils';

describe("test utils", () => {
  test("fixes number decimals to two", () => {
    const fixedNumber = fixNumberDecimals(1.123456789);
    const result = 1.12

    expect(fixedNumber).toBe(result);
  });

  test("get scales within a range", () => {
    const scales = getScalesWithinRange("C2", "B2");
    const secondScale = ["C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2"]

    expect(scales).toEqual(secondScale);
  });
});