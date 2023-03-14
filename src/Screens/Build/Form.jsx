import React, { useState, useEffect } from "react";
import { sendToApi, handleData } from '../../Config/api';

const ImageForm = () => {
  const [promt, setPromt] = useState("");
  const [negPromt, setNegPromt] = useState("");
  const [height, setHeight] = useState(512);
  const [width, setWidth] = useState(512);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [guidanceScale, setGuidanceScale] = useState(7.5);
  const [steps, setSteps] = useState(25);
  const [seed, setSeed] = useState(163319282);
  const [isChecked, setIsChecked] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Create a new canvas element to draw the shape on
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    // Draw the shape on the canvas
    const context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'gray';
    context.fillRect(0, 0, width/2, height/2);
    context.fillRect(width/2, height/2, width/2, height/2);

    // Convert the canvas to a data URL and set it as the preview source
    const dataUrl = canvas.toDataURL();
    setPreviewSrc(dataUrl);
  }, [height, width]);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked? true:false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    let responseBody = await handleData(data);
    const imageUrl = await sendToApi(responseBody);
    setImageUrl(imageUrl);
    setLoading(false);
  };

  return (
    <div className="div-block" style={{ paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px", paddingRight: "10px" }}>
        <form
            id="wf-form-Build-Form"
            name="wf-form-Build-Form"
            style={{ flexBasis: "100%" }}
            data-name="Build Form"
            method="post"
            className="form-2"
            onSubmit={handleSubmit}
        >
                <div style={{ flexBasis: "65%", paddingRight: "10px" }}>
                    <label htmlFor="promt" style={{ color: 'white', fontSize: '1.5vw' }}>Generate your idea:</label>
                    <br/>
                    <input
                        type="text"
                        className="text-field-2 form-textfield w-input  build_input "
                        maxLength={256}
                        name="promt"
                        data-name="promt"
                        placeholder="Generate your idea"
                        id="promt"
                        required="*"
                    />
                    <input
                        type="text"
                        className="text-field-3 form-textfield w-input build_input "
                        maxLength={256}
                        name="neg_promt"
                        data-name="neg_promt"
                        placeholder="What to exclude (Optional)"
                        id="neg_promt"
                        required=""
                    />
                    <input
                        type="submit"
                        defaultValue="Submit"
                        data-wait="Please wait..."
                        className="submit-button button full w-button"
                    />
                    <br />
                    <br />
                    {loading ? ( // Render the loading symbol if the loading state variable is true
                        <div>Loading...
                            <div class="lds-loading"><div></div><div></div><div></div></div>
                        </div>
                    ) : (
                        imageUrl && (
                        <img
                            src={imageUrl}
                            aria-hidden
                            alt="Generated Image"
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />)
                    )}
                </div>
                <div style={{ flexBasis: "35%", paddingLeft: "10px" }}>
                    <label style={{ color: 'white', fontSize: '1.5vw' }}>Options:</label>
                    <br />
                    <label htmlFor="height" style={{ color: 'white', fontSize: '1vw' }}>Height: {height}</label>
                    <input
                        type="range"
                        id="height"
                        name="height"
                        min="64"
                        max="1024"
                        step="8"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                    />
                    <br />
                    <label htmlFor="width" style={{ color: 'white', fontSize: '1vw' }}>Width: {width}</label>
                    <input
                        type="range"
                        id="width"
                        name="width"
                        min="64"
                        max="1024"
                        step="8"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                    />
                    <br />
                        {previewSrc && <img src={previewSrc} alt="Shape preview" style={{ maxWidth: '250px', maxHeight: '250px' }}/>}
                    <br />
                    <br />
                    <label style={{ color: 'white', fontSize: '1.5vw' }}>Advanced (Optional):</label>
                    <br />
                    <div style={{ display: 'flex' }}>
                        <input type="checkbox" id="checkbox" name="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                        <label htmlFor="myCheckbox" style={{ color: 'white'}}> Prefix styling tokens automatically ()</label>
                    </div>
                    <br />
                    <label htmlFor="guidanceScale" style={{ color: 'white', fontSize: '1vw' }}>Guidance Scale: {guidanceScale}</label>
                    <input
                        type="range"
                        id="guidanceScale"
                        name="guidanceScale"
                        min="0"
                        max="50"
                        step="0.5"
                        value={guidanceScale}
                        onChange={(e) => setGuidanceScale(Number(e.target.value))}
                    />
                    <br />
                    <label htmlFor="steps" style={{ color: 'white', fontSize: '1vw' }}>Steps: {steps}</label>
                    <input
                        type="range"
                        id="steps"
                        name="steps"
                        min="0"
                        max="50"
                        step="1"
                        value={steps}
                        onChange={(e) => setSteps(Number(e.target.value))}
                    />
                    <br />
                    <label htmlFor="seed" style={{ color: 'white', fontSize: '1vw' }}>Seed (0 = random):</label>
                    <input id="seed"
                        name="seed"
                        value={seed}
                        className="text-field-3 form-textfield w-input  build_input "/>
                </div>
        </form>
        <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
        </div>
    </div>
  );
};

export default ImageForm;
