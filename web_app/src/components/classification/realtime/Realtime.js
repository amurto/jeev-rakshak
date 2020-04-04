import React, { useRef, useContext } from 'react';
import { ModelContext } from '../context/model-context';
import { useDimension } from '../utils/dimension-hook';
import useWebcam from './useWebcam';
import useVideoPrediction from '../utils/useVideoPrediction';

const Realtime = () => {
  const { model, labels } = useContext(ModelContext);
  const dimensions = useDimension();
  const videoRef = useRef();
  const resultRef = useRef();
  const cameraLoaded = useWebcam(model, videoRef)

  useVideoPrediction(model, labels, videoRef, resultRef, cameraLoaded)

  return (
    <div>
        <div className="center-div">
          <div style={{
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
          }}>
              <div className="image-container">
                  <video
                      autoPlay
                      playsInline
                      muted
                      ref={videoRef}
                      width={dimensions.width}
                      height={dimensions.height} 
                      className="image-canvas"
                  />
              </div>
              {cameraLoaded && <div className="result" ref={resultRef} />}
          </div>
        </div>
    </div>
  )
}

export default Realtime;