import { interpretCorrelations } from "..";

describe("audio magnitudes processing", () => {
  const magnitudes = [8.732455673801179e-8, 4.397161739597124e-8];

  test("return interpreted correlation if higher than average", () => {
    const averageMagnitude = 41.3301919467798082;
    const maxMagnitude = {
      strongestMagnitude: 4.397161739597124e-8,
      maxIndexReached: 1
    };
    const B3ToC4Frequencies = [246.94, 761.63];
    const interpretedCorrelation = interpretCorrelations(averageMagnitude, maxMagnitude, B3ToC4Frequencies);

    expect(interpretedCorrelation).toEqual(761.63)
  });
  test("do not return interpreted correlation if is smaller than average", () => {
    const averageMagnitude = 4.3301919467798082;
    const maxMagnitude = {
      strongestMagnitude: 4.397161739597124e-8,
      maxIndexReached: 1
    };
    const B3ToC4Frequencies = [246.94, 761.63];
    const interpretedCorrelation = interpretCorrelations(averageMagnitude, maxMagnitude, B3ToC4Frequencies);

    expect(interpretedCorrelation).toEqual(null)
  });
});
