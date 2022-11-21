// import React, { useEffect, useRef }  from 'react'
// import { useState } from 'react';


// const Canvas = ({}) => {
//     const [rotateDeg,setRotateDeg] = useState(0)
//     const [customDeg,setCustomDeg] = useState(45)
//     const canvasRef = useRef(null);
//     const imageRef = useRef(null)
//     const initRef = useRef(true);
//     const handleDegree = (degrre) => {
//       setRotateDeg(rotateDeg + degrre);
//     }
//     const handleCustom = (degrre) => {
//       const image = imageRef?.current;
//       setCustomDeg(degrre);
//       drawRotated(image, degrre);
//     };

//     const drawRotated = (image,degrees) => {
      
//       const canvas = canvasRef.current;
//       const context = canvas.getContext("2d");
//       context.clearRect(0, 0, context.canvas.width, context.canvas.height);
//       context.save();
//       context.translate(context.canvas.width / 2, context.canvas.height / 2);
//       context.rotate((degrees * Math.PI) / 180);
//       context.drawImage(image, -image.width / 2, -image.width / 2);
//       context.restore();
//     };

//     useEffect(() => {
//       const image = imageRef.current;
//       drawRotated(image, rotateDeg);
//     }, [rotateDeg]);

//     return (
//     <div ref={initRef}>
//       <img src="./draw.jpg" alt="" ref={imageRef} />
//       <div style={{ width: "100%", height: "285px" }}>
//         <canvas width={1000} height={711} ref={canvasRef} />
//       </div>
//       <button onClick={() => handleDegree(-90)}>Rotate Left</button>
//       <button onClick={() => handleDegree(90)}>Rotate Right</button>
//       <input
//         type="number"
//         value={customDeg}
//         onChange={(e) =>
//           setCustomDeg(e.target.value)
//         }
//       />
//        <button onClick={() => handleCustom(customDeg)}></button>
      
//     </div>
//   );
// }

// export default Canvas



import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../../context/CanvasContext';


const Canvas = ({image,degree}) => {
  const canvasRef = useRef(null);
  const {canvas ,setCanvas } = useGlobalContext();
  let maxSize = {
    width: 800,
    height: 600
  }

  // const  downloadCanvas = ()  => {
  //   const canvas = canvasRef.current;
  //   let link = document.createElement("a");
  //   link.download = "image_name.png";
  //   link.href = canvas.toDataURL("image/png");
  //   link.click();
  // }

  let updateRotationDegrees = function(degree) {
    if (degree === 'clockwise') {
      degree += 90
    } else if (degree === 'anticlockwise') {
      degree -= 90
    }
    if (Math.abs(degree) === 360) {
      degree = 0
    }
    return degree
  }
  let determineSize = function(width, height, maxW, maxH, degrees) {
    let w, h;
    degrees = Math.abs(degrees)
    if (degrees === 90 || degrees === 270) { // values for width and height are swapped for these rotation positions
      w = height
      h = width
    } else {
      w = width
      h = height
    }
    if (w > h) {
      if (w > maxW) {
        h = h * maxW / w
        w = maxW
      }
    } else {
      if (h > maxH) {
        w = w * maxH / h
        h = maxH
      }
    }
    return {
      width: w,
      height: h
    }
  }
  
  const drawRotated = (image, degree) => {
    let maxSize = {
      width: image.naturalWidth,
      height:  image.naturalHeight
    }
    const context = canvas.getContext("2d");
    let degrees = updateRotationDegrees(degree)
    let newSize = determineSize(image.width, image.height, maxSize.width, maxSize.height, degrees)
    canvas.width = newSize.width
    canvas.height = newSize.height
    context.save()
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    if (degrees === 0) {
      context.drawImage(image, 0, 0, newSize.width, newSize.height)
    } else {
      context.translate(canvas.width / 2, canvas.height / 2)
      context.rotate(degrees * Math.PI / 180)
  
      if (Math.abs(degrees) === 180) {
        context.drawImage(image, 0,0)
      } else { // 90 or 270 degrees (values for width and height are swapped for these rotation positions)
        context.drawImage(image, -newSize.height / 2, -newSize.width / 2, newSize.height, newSize.width)
      }
    }
    context.restore()
  };
  
  useEffect(()=> {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = image.width
    canvas.height = image.height
    context.drawImage(image,  0,0);
    setCanvas(canvas)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(()=> {
    if(canvas) {
      drawRotated(image,degree)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[degree])

  return <canvas ref={canvasRef} />;
};

export default Canvas;