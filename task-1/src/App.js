import { useState } from "react";
import "./App.css";

function App() {
  const [couldEdit, setCouldEdit] = useState(false);
  const [outerFrameWidth, setOuterFrameWidth] = useState(400);

  const handleResize = () => {
    setOuterFrameWidth((prevWidth) => (prevWidth === 400 ? 800 : 400));
  };

  return (
    <div className="App">
      <div className="outer-frame" style={{ width: `${outerFrameWidth}px` }}>
        <p className="text-field" contentEditable={couldEdit}></p>
        <div>
          <button onClick={() => setCouldEdit(!couldEdit)}>edit</button>
          <br />
          <button
           onClick={handleResize}>resize</button>
        </div>
      </div>
    </div>
  );
}

export default App;
