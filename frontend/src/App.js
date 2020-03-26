import React, { useState, useCallback } from 'react';
import { ModelContext } from './components/model-context';
import Cam from './components/Cam';


const App = () => {
  const [model, setModel] = useState(null);

  const loadModel = useCallback((model) => {
      setModel(model);
  }, []);

  return (
      <ModelContext.Provider value={{model: model, loadModel: loadModel}}>
        <Cam />
      </ModelContext.Provider>
  );
}

export default App;

// export function loadModel() {
// 	return (dispatch, getState) => {
// 		const savedModel = localStorage.getItem('mobilenet');
// 		dispatch({type: 'TF_MODEL_LOAD_START'});
// 		if(savedModel) {
// 			tf.loadModel('indexeddb://mobilenet').then((model)=>{
// 				console.log('Indexed DB model being loaded ::');
// 				dispatch({type: 'TF_MODEL_LOAD_SUCCESS', model});
// 			})
// 		} else {
// 			tf.loadModel('http://127.0.0.1:8887/mobilenet/model.json?static=1').then((model)=>{
// 				console.log('TF model being loaded for the first time ::');
// 				localStorage.setItem('mobilenet', true);
// 				model.save('indexeddb://mobilenet')
// 				dispatch({type: 'TF_MODEL_LOAD_SUCCESS', model});
// 			})
// 		}
// 	}
// }
