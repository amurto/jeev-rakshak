import { useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const detectFrame = async (model, labels, videoRef, resultRef) => {
    try {
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
            label: labels[i],
            score: score
        }));
            
        finalScores.sort((a, b) => b.score - a.score);
        resultRef.current.innerHTML = finalScores[0].label + ' ' + finalScores[0].score
        requestAnimationFrame(() => {
            detectFrame(model, labels, videoRef, resultRef)
        })
    } catch(err) {}
}

const useVideoPrediction = (model, labels, videoRef, resultRef, shouldRender) => {
    useEffect(() => {
        if (model && labels && shouldRender) {
            detectFrame(model, labels, videoRef, resultRef)
        }
    }, [model, labels, shouldRender, videoRef, resultRef])
}

export default useVideoPrediction;