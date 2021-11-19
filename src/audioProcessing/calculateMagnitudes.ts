export const computeMagnitudes = (frequencies: number[]) => {   // Compute the (squared) magnitudes of the complex amplitudes for each note frequency
  const magnitudes = frequencies.map((frequency) => {
    return frequency[0] * frequency[0] + frequency[1] * frequency[1];
  });
  return magnitudes;
};

export const calculateAverageMagnitudeValues = (magnitudes: number[], strongestMagnitude: number) => {
  const averageMagnitude =
    magnitudes.reduce(function (a, b) {
      return a + b;
    }, 0) / magnitudes.length; // find the average magnitude of all magnitudes
  const referenceOfMagnitudeOnAverage = strongestMagnitude / averageMagnitude; // calculate the weight of the maxixum magnitude in relation with the average magnitude

  return referenceOfMagnitudeOnAverage;
};

export const getMaximumMagnitude = (magnitudes: number[]) => {
  let maxIndexReached = -1;
  let strongestMagnitude = 0;

  for (let i = 0; i < magnitudes.length; i++) {
    // find the highest magnitude between 0 and -1
    if (magnitudes[i] <= strongestMagnitude) {
      continue;
    }

    maxIndexReached = i; // Assign an index to the magnitude found, to be able to find the matching frequency later
    strongestMagnitude = magnitudes[i];
  }

  return { strongestMagnitude, maxIndexReached };
};