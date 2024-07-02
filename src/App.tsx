import { useState } from "react"

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  })

  const handleChange = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Bob",
      },
    })
  }
  return (
    <div>
      <p>Hello {game.player.name}!</p>
      <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default App
