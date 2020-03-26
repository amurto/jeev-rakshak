import { useEffect, useState } from 'react'

const useWebcam = (camera, videoRef) => {
  const [webcamLoaded, setWebcamLoaded] = useState(false)
  useEffect(() => {
    if (camera) {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({
            audio: false,
            video: {
              facingMode: 'environment'
            }
          })
          .then(stream => {
            // window.stream = stream
            videoRef.current.srcObject = stream
            videoRef.current.onloadedmetadata = () => {
              setWebcamLoaded(true)
            }
          })
      }
    }
  }, [videoRef, camera])
  return webcamLoaded
}

export default useWebcam;
