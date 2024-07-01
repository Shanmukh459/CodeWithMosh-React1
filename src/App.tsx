import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"

function App() {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Hello World!</Alert>
      )}
      <Button color="primary" onClick={() => setShowAlert(true)} />
    </div>
  )
}

export default App
