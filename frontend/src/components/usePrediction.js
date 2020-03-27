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
    tensor.dispose()
    tf.dispose(res)
}

const batched = tf.tidy(() => {
const img = tf.browser.fromPixels(input);
const small = tf.image.resizeBilinear(img, [224, 224]).div(255);

// Reshape to a single-element batch so we can pass it to executeAsync.
return small.expandDims(0).toFloat();
});

const results = graph.execute(batched);

const scores = results.arraySync()[0];

results.dispose();
batched.dispose();

const finalScores = scores.map((score, i) => ({
label: labels[i],
score: score
}));

finalScores.sort((a, b) => b.score - a.score);

return finalScores;

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
