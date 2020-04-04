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
    const model = await tf.loadGraphModel(MODEL_JSON);
    fetchModel(model);
    const response = await fetch(LABELS_URL);
    let labels = await response.json();
    fetchLabels(labels)
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
            This currently uses Mobilenetv2
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
                        color: '#6e00b8',
                        fontWeight: '500',
                      }}>Loading Model. Please wait a few seconds...</p>
                    </div>
                  ) : (
                    <button className="css-btn" style={{ width: '60%' }} onClick={loadModel}>
                      <p style={{ fontSize: '16px', fontWeight: '500' }}>Load Model</p>
                    </button>
                  )}
              </div>
            )}
          </div>
      </ModelContext.Provider>
  );
}

export default Classify;