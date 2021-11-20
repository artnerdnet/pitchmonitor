import { computeMagnitudes, findMaximumMagnitude, calculateAverageMagnitudeValues } from "..";

describe("audio magnitudes processing", () => {
  const amplitudes = [[0.00016652538293978827, 0.00024411852362073768], [0.0002004238055248845, 0.00006165967543617559]];
  const magnitudes = [8.732455673801179e-8, 4.397161739597124e-8];

  test("calculates magnitudes based on amplitudes", () => {
    const computedMagnitudes = computeMagnitudes(amplitudes);

    expect(computedMagnitudes).toEqual(magnitudes);
  });
  test("returns maximum magnitude and its index from an array of magnitudes", () => {
    const maximumMagnitudeFound = findMaximumMagnitude(magnitudes);
    const expectedMaxMagnitude = { "maxIndexReached": 0, "strongestMagnitude": magnitudes[0] };

    expect(maximumMagnitudeFound).toEqual(expectedMaxMagnitude);
  });
  test("calculates magnitudes based on notes frequencies", () => {
    const averageMagnitude = calculateAverageMagnitudeValues(magnitudes, magnitudes[0]);
    const averageExpected = 1.3301919467798082;

    expect(averageMagnitude).toEqual(averageExpected)
  });
});