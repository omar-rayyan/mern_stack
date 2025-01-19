import { useState } from 'react'
import RegisterationForm from './components/RegisterationForm.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RegisterationForm/>
    </div>
  )
}

export default App
