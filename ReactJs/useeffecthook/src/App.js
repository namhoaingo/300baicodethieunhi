import './App.css';
import Content from './components/Content';
import { useState } from 'react';

function App() {
  var [showContent, setShowContent] = useState(false);
  
  var toggleHandle = () =>{
    setShowContent(!showContent);
  }
  
  return (
    <div className="App">
      <header className="App-header">
       Hello
      </header>
      <button onClick={toggleHandle}>
        Toggle
      </button>
      {showContent && <Content/>}
    </div>
  );
}

export default App;
