import { useState } from "react"

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppins: ["Mushrooms"],
  })

  const handleChange = () => {
    setPizza({
      ...pizza,
      toppins: [...pizza.toppins, "Cheese"],
    })
  }
  return (
    <div>
      <p>Name: {pizza.name}</p>
      <ul>
        {pizza.toppins.map((toppin) => (
          <li key={toppin}>{toppin}</li>
        ))}
      </ul>
      <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default App
