import { useEffect, useState } from "react";
import startAudioInputCapture from "../utils/audioInput";
import ChartApex from "../components/Chart";
import { checkUserMedia } from "../utils/helpers";

const Main = () => {
  const [detectedPitches, setDetectedPitches] = useState([]);
  const [pitch, setPitch] = useState(null);
  const [initialize, setInitialize] = useState(false);

  const currentPitchHandler = (inputPitch) => {
    if (inputPitch !== undefined) {
      setPitch(inputPitch);
    }
  };

  useEffect(() => {
    const userHasMedia = checkUserMedia();

    if (userHasMedia && initialize) {
      startAudioInputCapture(currentPitchHandler);
    }
  }, [initialize]);

  useEffect(() => {
    if (pitch) {
      setDetectedPitches([...detectedPitches,{ x: pitch.note, y: pitch.frequency },]);
    }
  }, [pitch]);

  return (
    <>
      {detectedPitches.length && (
        <ChartApex
          data={detectedPitches}
        />
      )}
      <button onClick={() => setInitialize(true)}>start</button>
    </>
  );
};

export default Main;
