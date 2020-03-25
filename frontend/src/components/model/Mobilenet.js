import React, { useState, useEffect } from 'react';
import CLASSES from '../classlist.js';
import * as tf from '@tensorflow/tfjs';
const MODEL_URL = process.env.PUBLIC_URL + '/mobilenet/';
// const LABELS_URL = MODEL_URL + 'labels.json';
const MODEL_JSON = MODEL_URL + 'model.json';

const Mobilenet = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => setCount(count + 1), 1000);
    return () => {
        clearInterval(interval);
    };
    }, [count]);

    // useEffect(() => {
    //     console.log(count)
    // })
    const [model, setModel] = useState(null);
    const [photoURL, setPhotoURL] = useState(null)


    const loadModel = async () => {
        const model = await tf.loadGraphModel(MODEL_JSON)  
        setModel(model)
    }

    const onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPhotoURL(reader.result)
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    
    const identify = async () => {
        var img = new Image();
        img.src = photoURL;
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
        console.log(top5[0].class)
    }

    return (
        <div>
            <button onClick={loadModel}>Load Model</button>
            {model && (
                <div>
                    <input type="file" accept="image/*" onChange={onSelectFile} />
                    <div>
                        {photoURL && (
                            <div>
                                <img src={photoURL} height="300" width="300" alt="Mob" />
                            </div>
                        )}
                    </div>
                    <button onClick={identify}>identify</button>
                </div>
            )}
        </div>
    )
}

export default Mobilenet;