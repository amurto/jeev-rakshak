import { useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const detectFrame = async (model, labels, imageRef, resultRef) => {
    const batched = tf.tidy(() => {
        const img = tf.browser.fromPixels(imageRef.current);
        const small = tf.image.resizeBilinear(img, [224, 224]).div(255);
        
        // Reshape to a single-element batch so we can pass it to executeAsync.
        return small.expandDims(0).toFloat();
    });

    const results = model.execute(batched);

    const scores = results.arraySync()[0];

    results.dispose();
    batched.dispose();

    const finalScores = scores.map((score, i) => ({
        label: labels[i],
        score: score
    }));
        
    finalScores.sort((a, b) => b.score - a.score);
    resultRef.current.innerHTML = finalScores[0].label + ' ' + finalScores[0].score
}

const useImagePrediction = (model, labels, loadedImg, imageRef, resultRef) => {
    useEffect(() => {
        if (model && labels && loadedImg && imageRef) {
            detectFrame(model, labels, imageRef, resultRef)
        }
    }, [model, labels, loadedImg, imageRef, resultRef])
}

export default useImagePrediction;