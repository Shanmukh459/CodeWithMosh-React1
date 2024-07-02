import Like from "./components/Like"

function App() {
  const items = ["New York", "San Francisco", "Los Angeles"]
  return (
    <div>
      <Like onClick={() => console.log("Clicked")} />
    </div>
  )
}

export default App
