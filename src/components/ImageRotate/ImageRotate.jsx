import React, { useRef, useState } from "react";
// Components
import { Button } from "../Button";
import { ImgPrw, RotateLeft, RotateRight } from "../Icons/Icons";

// Utils
import { ImageCreate, readFileAsync } from "../../utils/utils";
// Styles
import { Wrapper } from "./ImageRotate.styles";
import { Canvas } from "../Canvas";
import { useGlobalContext } from "../../context/CanvasContext";

const initialState = {
  fileName: "",
  url: "",
  imageFile: "",
}
const ImageRotate = () => {
  const [imageInfo, setImageInfo] = useState(initialState);
  const [rotateDeg, setRotateDeg] = useState(0);
  const { canvas } = useGlobalContext();
  const inpurRef = useRef(null);

  function removeImage() {
    inpurRef.current.value = "";
    setImageInfo(initialState);
  }
  const handleUpload = () => {
    inpurRef.current.click();
  };
  async function uploadImg(e) {
    const file = e.target.files[0];
    // Create Url
    const url = URL.createObjectURL(file);
    // Create Image
    const imageFile = await ImageCreate(url);

    setImageInfo({
      fileName: file.name,
      url,
      imageFile,
    });
  }
  const handleDegree = (degrre) => {
    let rotateDegree;
    if (rotateDeg === 0) {
      rotateDegree = 270;
    } else {
      rotateDegree = (rotateDeg + degrre) % 360;
    }
    setRotateDeg(rotateDegree);
  };

  const downloadCanvas = () => {
    debugger;
    let link = document.createElement("a");
    link.download = imageInfo.fileName;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  return (
    <Wrapper>
      <div className="rotate_container">
        <div className="rotate_dropzone">
          <div className="rotate_dropzone-content">
            <div
              className="rotate_dropzone-input"
              style={imageInfo.image ? { display: "none" } : null}
            >
              <label>
                <input
                  type="file"
                  className="dropzone-input"
                  accept=".JPEG,.JPG,.PNG"
                  style={{ display: "none" }}
                  autoComplete="off"
                  tabIndex="-1"
                  onChange={uploadImg}
                  ref={inpurRef}
                  disabled={imageInfo.image ? true : false}
                />
              </label>

              <span>Drag &amp; drop image here or</span>
              <ImgPrw />
              <Button
                cssName="btn_blue"
                text="Upload Image"
                handleClick={handleUpload}
              />
            </div>
            <div
              className="rotate_dropzone-canvas"
              style={
                imageInfo.url
                  ? { backgroundImage: `url(${imageInfo.url})` }
                  : null
              }
            ></div>
            {imageInfo.imageFile ? (
              <div className="canvas-wrapper">
                {" "}
                <Canvas image={imageInfo.imageFile} degree={rotateDeg} />
              </div>
            ) : null}
          </div>
        </div>
        <div className="rotate_setings">
          <div className="rotate_setings-content">
            <p>Rotate image</p>
            <div className="buttons_rl">
              <Button
                cssName="rotate"
                logo={<RotateLeft />}
                text="Rotate Left"
                handleClick={() => handleDegree(-90)}
              />
              <Button
                cssName="rotate"
                logo={<RotateRight />}
                text="Rotate right"
                handleClick={() => handleDegree(90)}
              />
            </div>
            <Button
              cssName="btn_blue dow"
              text="Download"
              handleClick={downloadCanvas}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ImageRotate;
