import React, { useState, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import { ModelContext } from './classification/context/model-context';
import Selector from './classification/utils/Selector';
import LoadingSpinner from './classification/utils/LoadingSpinner';

const MODEL_URL = process.env.PUBLIC_URL + '/classification/';
const LABELS_URL = MODEL_URL + 'labels.json';
const MODEL_JSON = MODEL_URL + 'model.json';

const Classify = () => {
  const [model, setModel] = useState(null);
  const [labels, setLabels] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');

  const fetchModel = useCallback((model) => {
      setModel(model);
  }, []);

  const fetchLabels = useCallback((labels) => {
      setLabels(labels);
  }, []);

  const selectMode = useCallback((selected) => {
      setSelected(selected)
  }, [])

  const loadModel = async () => {
    setLoading(true);
    const savedModel = localStorage.getItem('animal_classifier');
    const savedLabels = localStorage.getItem('animal_classifier_labels');
    if (savedModel && savedLabels) {
      const model = await tf.loadGraphModel('indexeddb://animal_classifier'); 
      let labels_json = JSON.parse(savedLabels);
      fetchModel(model);
      fetchLabels(labels_json)
      console.log("saved animal classifier found")
    } else {
      // Loading Model for first time
      const model = await tf.loadGraphModel(MODEL_JSON);
      fetchModel(model);
      const response = await fetch(LABELS_URL);
      let labels_json = await response.json();
      fetchLabels(labels_json)
      localStorage.setItem('animal_classifier', true);
      model.save('indexeddb://animal_classifier')
      localStorage.setItem('animal_classifier_labels', JSON.stringify(labels_json));
    }
    setLoading(false);
  }

  return (
      <ModelContext.Provider 
        value={{
          model: model, 
          fetchModel: fetchModel, 
          labels: labels, 
          fetchLabels: fetchLabels,
          selected: selected,
          selectMode: selectMode
        }}>
          <div className="header-div">
            <p className="demo-title">Image Classification</p>
            <p>This currently uses Mobilenetv2</p>
          </div>
          <div>
            {model ? (
              <div>
                <Selector />
              </div>
            ) : (
              <div className="center-div load-div">
                  {loading ? (
                    <div style={{ textAlign: 'center' }}>
                      <LoadingSpinner />
                      <p style={{
                        color: '#950740',
                        fontWeight: '500',
                      }}>Loading Model. Please wait a few seconds...</p>
                    </div>
                  ) : (
                    <button className="css-btn" style={{ width: '60%' }} onClick={loadModel}>
                      <div style={{ fontSize: '16px', fontWeight: '500' }}>Load Model</div>
                      <div style={{ fontSize: '16px', fontWeight: '500' }}>8.6 MB</div>
                    </button>
                  )}
              </div>
            )}
          </div>
      </ModelContext.Provider>
  );
}

export default Classify;