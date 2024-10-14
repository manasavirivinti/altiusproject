import React, { useState } from "react";
import "./Image.css"
function Image() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="main">
            <h2>Upload an image</h2>
            <input type="file" onChange={handleChange} />
            <div>
                <img src={file} style={{margin:"100px",height:"20%",width:"50%"}} />
            </div>
        </div>
    );
}

export default Image;
