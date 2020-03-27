import { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import CLASSES from './classlist.js';

const detectFrame = async (model, videoRef, setResult) => {
    const batched = tf.tidy(() => {
        const img = tf.browser.fromPixels(videoRef.current);
        const small = tf.image.resizeBilinear(img, [224, 224]).div(255);
        
        // Reshape to a single-element batch so we can pass it to executeAsync.
        return small.expandDims(0).toFloat();
    });

    const results = model.execute(batched);

    const scores = results.arraySync()[0];

    results.dispose();
    batched.dispose();

    const finalScores = scores.map((score, i) => ({
        label: CLASSES[i],
        score: score
    }));
        
    finalScores.sort((a, b) => b.score - a.score);
    setResult(finalScores[0].label + ' ' + finalScores[0].score)
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
