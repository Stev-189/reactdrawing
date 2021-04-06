import React, {useRef} from 'react';
import './App.css';
import CanvasDraw from "react-canvas-draw";

function App() {
  const firstCanvas= useRef(null)
  const secondCanvas= useRef(null)

  const handleClick=_=>{
    const data= firstCanvas.current.getSaveData();
    // console.log(data);
    secondCanvas.current.loadSaveData(data, false);//registro a agregar, true no hay animacion solo carga, false hay animacion
  }

  const handleClear=_=>firstCanvas.current.clear()
  const handleDeshacer=_=>firstCanvas.current.undo()

  return (
    <>
      <button onClick={handleClick}>
        Save Drawing
      </button>
      <button onClick={handleClear}>
        Clear
      </button>
      <button onClick={handleDeshacer}>
        Deshacer
      </button>
      <CanvasDraw 
        brushRadius={1} 
        brushColor={'#eccc68'} 
        catenaryColor={"#a4b0be"} 
        style={{border:'1px solid black'}}
        // hideGrid={false}
        ref={firstCanvas}
        />
      <CanvasDraw
        ref={secondCanvas}
        style={{border:'1px solid red'}}
        hideGrid={true}
        disabled={true}
      />
    </>
  );
}

export default App;
