import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
const MODEL_URL = process.env.PUBLIC_URL + '/model/';
// const LABELS_URL = MODEL_URL + 'labels.json';
const MODEL_JSON = MODEL_URL + 'model.json';

const Mobilenet = () => {
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
                        .resizeNearestNeighbor([100,100])
                        .toFloat()
                        .expandDims()
        console.log(tensor)
        let res = await model.predict(tensor)
        console.log(res)
        model.predict(tensor).data().then(predictions => {
            let top5 = Array.from(predictions)
                .map((p, i) => {
                    return {
                        probability: p,
                        class: i
                    }
                }).sort((a, b) => {
                    return b.probability - a.probability;
                }).slice(0,5);
            console.log(top5)
        })
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
                                <img src={photoURL} alt="Mob" />
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