import React, { useRef, useContext, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { ModelContext } from './model-context';
import useWebcam from './useWebcam';
import usePrediction from './usePrediction'
const MODEL_URL = process.env.PUBLIC_URL + '/mobilenet/';
// const LABELS_URL = MODEL_URL + 'labels.json';
const MODEL_JSON = MODEL_URL + 'model.json';

const Cam = () => {
    const modelContext = useContext(ModelContext);  
    const videoRef = useRef()
    const [camera, setCamera] = useState(false);
    const cameraLoaded = useWebcam(camera, videoRef)

    const result = usePrediction(modelContext.model, videoRef, cameraLoaded)

    const loadModel = async () => {
        const model = await tf.loadGraphModel(MODEL_JSON);
        modelContext.loadModel(model);
    }

    const showCamera = () => {
        setCamera(!camera)
    }

    return (
        <div>
            {!modelContext.model && (
                <div>
                    <button onClick={loadModel}>Load Model</button>
                </div>
            )}
            {modelContext.model && (
                <div>
                    {camera && (
                        <div style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <video
                                autoPlay
                                playsInline
                                muted
                                ref={videoRef}
                                width="80%"
                                height="300"
                            />
                        </div>
                    )}
                    <button onClick={showCamera}> Camera </button>
                </div>
            )}
            {result}
        </div>
    )
}

export default Cam;