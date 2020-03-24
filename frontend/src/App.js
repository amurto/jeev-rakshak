import React from 'react';
import * as tf from '@tensorflow/tfjs'
const MODEL_URL = process.env.PUBLIC_URL + '/model/'
const LABELS_URL = MODEL_URL + 'labels.json'
const MODEL_JSON = MODEL_URL + 'model.json'

const App = () => {
  return (
    <div>
      hi
    </div>
  );
}

export default App;
