import ListGroup from "./components/ListGroup"

function App() {
  const items = ["New York", "San Francisco", "Los Angeles"]
  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => console.log()}
      />
    </div>
  )
}

export default App
