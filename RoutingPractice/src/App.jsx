import { useState } from 'react'
import Welcome from './components/Welcome';
import Word from './components/Word';
import ColoredWord from './components/ColoredWord';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Routing example</h1>
      <Routes>
        <Route path="/home" element={<Welcome />} />
        <Route path="/:word" element={<Word />} />
        <Route path="/:word/:textColor/:backgroundColor" element={<ColoredWord />} />
      </Routes>
    </div>
    </>
  )
}

export default App
