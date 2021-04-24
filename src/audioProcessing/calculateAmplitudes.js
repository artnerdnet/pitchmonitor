// Credits: jonathan.bergknoff.com/journal/making-a-guitar-tuner-html5

export const calculateAmplitudes = (buffer, notesFrequencies, sampleRate) => {
  // (2pi * frequency) gives the appropriate period to sine.
  // buffer index / sampleRate gives the appropriate time coordinate.
  const scaleFactor = (2 * Math.PI) / sampleRate; // sine wave distributed on sample rate
  const amplitudes = notesFrequencies.map((note) => {
    const { frequency } = note;

    // Represent a complex number as a length-2 array [ real, imaginary ] for sine and cosine values.
    const cosineAndSineValues = [0, 0];
    for (let t = 0; t < buffer.length; t++) {
      cosineAndSineValues[0] +=
        buffer[t] * Math.cos(scaleFactor * frequency * t);
      cosineAndSineValues[1] +=
        buffer[t] * Math.sin(scaleFactor * frequency * t);
    }

    return cosineAndSineValues;
  });

  return amplitudes;
}

