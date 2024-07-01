interface Props {
  type: string
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
  onClick: () => void
}
const Button = ({ type, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  )
}

export default Button
