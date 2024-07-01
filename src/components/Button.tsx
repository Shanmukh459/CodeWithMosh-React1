interface Props {
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
const Button = ({ color, onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      My button
    </button>
  )
}

export default Button
