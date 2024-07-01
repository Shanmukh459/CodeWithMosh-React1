import styles from "./Button.module.css"

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
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      My Button
    </button>
  )
}

export default Button
