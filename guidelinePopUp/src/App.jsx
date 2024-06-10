import { useEffect, useState } from 'react'
import Popup from './components/Popup.jsx';


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);


  useEffect(()=>{
    setTimeout(()=>{
      setTimedPopup(true);
    }, 3000);
  }, [])

  return (
    <div className='App'>
      <main>
        <h1>React Popups</h1>
        <br/><br/>
        <button className="design" onClick={() => setButtonPopup(true)}>Open Popup</button>
      </main>

      <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
        <h1>Guidelines Popup</h1><br></br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nemo. Consequuntur modi incidunt ut nesciunt minus ullam placeat enim aliquam?</p>
          <br></br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nemo. Consequuntur modi incidunt ut nesciunt minus ullam placeat enim aliquam?</p>
          <br></br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nemo. Consequuntur modi incidunt ut nesciunt minus ullam placeat enim aliquam?</p>
          <br></br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nemo. Consequuntur modi incidunt ut nesciunt minus ullam placeat enim aliquam?</p>
          <br></br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nemo. Consequuntur modi incidunt ut nesciunt minus ullam placeat enim aliquam?</p>
          <br></br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nemo. Consequuntur modi incidunt ut nesciunt minus ullam placeat enim aliquam?</p>
          <br></br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nemo. Consequuntur modi incidunt ut nesciunt minus ullam placeat enim aliquam?</p>
          <br></br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nemo. Consequuntur modi incidunt ut nesciunt minus ullam placeat enim aliquam?</p>
          <br></br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nemo. Consequuntur modi incidunt ut nesciunt minus ullam placeat enim aliquam?</p>
          <br></br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nemo. Consequuntur modi incidunt ut nesciunt minus ullam placeat enim aliquam?</p>
      </Popup>

    
    </div>
  )
}

export default App
