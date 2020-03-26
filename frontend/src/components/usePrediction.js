import { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import CLASSES from './classlist.js';

const detectFrame = async (model, videoRef, setResult) => {
    let tensor = tf.browser.fromPixels(videoRef.current)
            .resizeNearestNeighbor([224,224])
            .toFloat()
            .expandDims()
    let res = await model.predict(tensor)
    let predictions = await res.data()
    let top5 = Array.from(predictions)
            .map((p, i) => {
                return {
                    probability: p,
                    class: CLASSES[i]
                }
            }).sort((a, b) => {
                return b.probability - a.probability;
            }).slice(0,5);
    setResult(top5[0].class + String(top5[0].probability))
}

const usePrediction = (model, videoRef, shouldRender) => {
    const [result, setResult] = useState('')
    useEffect(() => {
        const interval = setInterval(() => {
            if (model && shouldRender) {
                detectFrame(model, videoRef, setResult)
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [model, shouldRender, videoRef, result])
    return result;
}

export default usePrediction;
