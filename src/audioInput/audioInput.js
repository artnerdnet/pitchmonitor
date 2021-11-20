import calculateNotesFrequencies from "../frequencyComputations/calculateNotesFrequencies";
import { calculateAmplitudes } from "../audioProcessing/calculateAmplitudes";
import interpretCorrelations from '../audioProcessing/interpretCorrelation'
import { referenceNote } from "../helpers/utils";

export const getAudioInput = async (currentPitchHandler) => {
  const audioContext = new AudioContext();
  const speaker = audioContext.destination;
  const processor = audioContext.createScriptProcessor(4096, 1, 1);
  const notesFrequencies = calculateNotesFrequencies(referenceNote);
  let recording = true;

  processor.addEventListener(
    "audioprocess",
    function (event) {
      const { inputBuffer } = event;
      const buffer = inputBuffer.getChannelData(0);
      const sampleRate = inputBuffer.sampleRate;
      let bufferex = [];

      if (recording === false) {
        return;
      }

      bufferex = bufferex.concat(
        Array.prototype.slice.call(buffer)
      );

      if (bufferex.length > 100) {
        recording = false;
        const amplitudes = calculateAmplitudes(
          buffer,
          notesFrequencies,
          sampleRate
        );

        const dominantFrequency = interpretCorrelations(
          amplitudes,
          notesFrequencies
        );

        currentPitchHandler(dominantFrequency);

        bufferex = [];
        setTimeout(function () {
          recording = true;
        }, 250);
      }

    },
    false
  );

  const microphoneStream = (stream) => {
    const microphone = audioContext.createMediaStreamSource(stream);
    microphone.connect(processor);
    processor.connect(speaker);
  };

  // TODO: handle error properly
  const userMediaError = (err) => console.error(err);

  // processor.addEventListener("audioprocess", processAudio);
  navigator.getUserMedia({ audio: true }, microphoneStream, userMediaError);
};