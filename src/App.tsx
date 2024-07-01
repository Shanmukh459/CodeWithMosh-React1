import Button from "./components/Button"

function App() {
  // const items = ["New York", "San Francisco", "London", "Tokyo", "Paris"]
  // const handleSelectItem = (item: string) => {
  //   console.log(item)
  // }
  const buttonTypes = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]

  return (
    <div>
      {buttonTypes.map((type) => (
        <Button key={type} type={type} onClick={() => console.log("Clicked")} />
      ))}
    </div>
  )
}

export default App
