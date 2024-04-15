import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("");

  const onInputChange = (e) => {
      setValue(e.target.value);
  }

  return (
    <>
      <input name="someInput" value={value} onChange={onInputChange} />
    </>
  )
}

export default App
