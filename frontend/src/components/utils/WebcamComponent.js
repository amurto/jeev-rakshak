import React, { useState, useEffect, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import CLASSES from '../classlist.js';
import * as tf from '@tensorflow/tfjs';
const MODEL_URL = process.env.PUBLIC_URL + '/mobilenet/';
// const LABELS_URL = MODEL_URL + 'labels.json';
const MODEL_JSON = MODEL_URL + 'model.json';


const WebcamComponent = () => {
    const [model, setModel] = useState(null);
    const [show, setShow] = useState(false);
    const [imgSrc, setImgSrc] = useState(null)
    const [result, setResult] = useState(null);
    const webcamRef = useRef(null);

    const loadModel = async () => {
        const model = await tf.loadGraphModel(MODEL_JSON)  
        setModel(model)
    }

    const [videoConstraints, setVideoConstraints] = useState({
        width: 300,
        height: 720,
        facingMode: "user"
    })

    const toggleFace = () => {
        let mode = videoConstraints.facingMode;
        if (mode === "user") {
            setVideoConstraints({
                width: 300,
                height: 300,
                facingMode: "environment"
            })
        } else {
            setVideoConstraints({
                width: 300,
                height: 300,
                facingMode: "user"
            })
        }
    }

    useEffect(() => {
        const interval = setInterval(async () => {
            if (show) {
                const imageSrc = webcamRef.current.getScreenshot();
                // if (imageSrc) {
                //     var img = new Image();
                //     img.src = imageSrc;
                //     let tensor = tf.browser.fromPixels(img)
                //                     .resizeNearestNeighbor([224,224])
                //                     .toFloat()
                //                     .expandDims()
                //     let res = await model.predict(tensor)
                //     let predictions = await res.data()
                //     let top5 = Array.from(predictions)
                //                     .map((p, i) => {
                //                         return {
                //                             probability: p,
                //                             class: CLASSES[i]
                //                         }
                //                     }).sort((a, b) => {
                //                         return b.probability - a.probability;
                //                     }).slice(0,5);
                //     console.log(top5[0].class)
                //     setResult(top5[0].class)
                // }
            }
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, [model, show]);

    const capture = useCallback(async () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc)
            if (imageSrc) {
                var img = new Image(224, 224)
                img.src = imageSrc;
                let tensor = tf.browser.fromPixels(img)
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
                console.log(top5)
                setResult(top5[0].class)
            }
        },
        [webcamRef, model]
    );

    return (
        <div>
            <button onClick={loadModel}>Load Model</button>
            {model && (
                <React.Fragment>
                    <button onClick={() => setShow(!show)}>Show Webcam</button>
                    {show && (
                        <React.Fragment>
                            <Webcam
                                audio={false}
                                height={300}
                                width={300}
                                ref={webcamRef}
                                screenshotFormat='image/webp'
                                videoConstraints={videoConstraints}
                            />
                            {result && (
                                <h5>{result}</h5>
                            )}
                            {imgSrc && (
                                <img src={imgSrc} alt="test" />
                            )}
                            <button onClick={toggleFace}>Toggle</button>
                            <button onClick={capture}>Capture photo</button>
                        </React.Fragment>
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default WebcamComponent;