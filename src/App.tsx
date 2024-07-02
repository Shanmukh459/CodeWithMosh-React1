import { useState } from "react"

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 1 },
    ],
  })

  const handleChange = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    })
  }
  return (
    <div>
      <ul>
        {cart.items.map((item) => (
          <p key={item.id}>
            {item.title}: {item.quantity}
          </p>
        ))}
      </ul>
      <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default App
