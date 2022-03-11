// const faceBox = document.querySelector('.face-box');
const leftEye = document.querySelector('.left.eye');
const rightEye = document.querySelector('.right.eye');

function findCenter(points) {
  let xSum = 0;
  let ySum = 0;
  for (let i = 0; i < points.length; i += 1) {
    const { _x, _y } = points[i];
    xSum += _x;
    ySum += _y;
  }
  return {
    x: xSum / points.length,
    y: ySum / points.length,
  };
}

function startDetection(videoElement) {
  const faceapi = ml5.faceApi({
    withLandmarks: true,
    withDescriptors: false,
  }, detectFace);

  // When the model is loaded
  function detectFace() {
    faceapi.detect(videoElement, (err, results) => {
      const [face] = results;
      if (face) {
        const {
          alignedRect: {
            _box: {
              _height,
              _width,
              _x,
              _y,
            },
          },
          parts: {
            leftEye: leftEyePoints,
            rightEye: rightEyePoints,
          },
        } = face;
        const leftCenter = findCenter(leftEyePoints);
        const rightCenter = findCenter(rightEyePoints);
        leftEye.style.display = '';
        leftEye.style.top = `${leftCenter.y}px`;
        leftEye.style.left = `${leftCenter.x}px`;
        rightEye.style.display = '';
        rightEye.style.top = `${rightCenter.y}px`;
        rightEye.style.left = `${rightCenter.x}px`;
        // faceBox.style.display = '';
        // faceBox.style.width = `${_width}px`;
        // faceBox.style.height = `${_height}px`;
        // faceBox.style.top = `${_y}px`;
        // faceBox.style.left = `${_x}px`;
      } else {
        leftEye.style.display = 'none';
        rightEye.style.display = 'none';
      }
      setTimeout(detectFace);
    });
  }
}

async function getMedia() {
  let stream = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { width: 1280, height: 720 },
    });
    const videoElement = document.querySelector('video');
    videoElement.srcObject = stream;
    videoElement.play();
    startDetection(videoElement);
    /* use the stream */
  } catch (err) {
    /* handle the error */
    console.log(err);
  }
}

document.querySelector('button').addEventListener('click', getMedia);
