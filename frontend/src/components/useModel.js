import { useEffect, useState } from 'react'
import * as tf from '@tensorflow/tfjs';

const useModel = modelPath => {
  const [model, setModel] = useState()
  useEffect(() => {
    tf.loadGraphModel(modelPath).then(model => {
      console.log(model)
      setModel(model)
    })
  }, [modelPath])
  return model
}

export default useModel
