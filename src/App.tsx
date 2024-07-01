import Button from "./components/Button/Button"

function App() {
  const items = ["New York", "San Francisco", "Los Angeles"]
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked!")} />
    </div>
  )
}

export default App
