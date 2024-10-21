import { useState } from "react"
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App(){

  let [show,setShow] = useState(false)

  function Toggle(){
    setShow(!show)
  }

  return(
    <>
        <button className="btn btn-primary mt-3" onClick={Toggle}>Open modal</button>
        {
          show && <Child methode = {Toggle} ></Child>
        }
    </>
  )
}

export default App

function Child(props){
  return(
    <>
      <div className="modal-overlay">
          <div className="content">
            <h1>Modal content</h1>
            <p>This is modal content click to close the model content</p>
            <button className="btn btn-danger " onClick={props.methode} >Close</button>
          </div>
      </div>
    </>
  )
}