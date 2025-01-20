import { useState } from 'react'
import ColorForm from './components/ColorForm';
import ColorsView from './components/ColorsView';

function App() {
  const [currentColors, setCurrentColors] = useState([]);
    
    const newColors = ( newColors ) => {
      setCurrentColors( newColors );
    }

  return (
    <>
      <ColorForm onNewColor={ newColors } />
      <ColorsView colors={ currentColors } />
    </>
  )
}

export default App
