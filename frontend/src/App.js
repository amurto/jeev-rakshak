import React from 'react';
import Mobilenet from './components/model/Mobilenet';
import WebcamComponent from './components/utils/WebcamComponent';

const App = () => {
  return (
    <div>
      <Mobilenet />
      {/* <WebcamComponent /> */}
    </div>
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

// const [time, setTime] = useState(Date.now());

// useEffect(() => {
//   const interval = setInterval(() => setTime(Date.now()), 1000);
//   return () => {
//     clearInterval(interval);
//   };
// }, []);