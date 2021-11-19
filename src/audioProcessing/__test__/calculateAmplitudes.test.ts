import { calculateAmplitudes } from './../calculateAmplitudes';

describe("test utils", () => {
  test("calculate amplitudes", () => {
    const arr = new Float32Array(2);
    const buffer = {
      duration: 10,
      length: 10,
      numberOfChannels: 1,
      sampleRate: 4400,
      copyFromChannel: jest.fn(),
      copyToChannel: jest.fn(),
      // copyFromChannel: {
      //   destination: arr,
      //   channelNumber: 2,
      // },
      // copyToChannel: {
      //   destination: arr,
      //   channelNumber: 1,
      // },
      getChannelData: jest.fn()
    };
    const b3ToC4Frequencies = [{ note: 'B3', frequency: 246.94 }, { note: 'C4', frequency: 61.63 }];
    const sampleRate = 44100;

    const fixedNumber = calculateAmplitudes(buffer, b3ToC4Frequencies, sampleRate);
    const result = 1.12

    expect(fixedNumber).toBe(result);
  });

});