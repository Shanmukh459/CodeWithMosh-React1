import { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"

interface Props {
  onClick: () => void
}
const Like = ({ onClick }: Props) => {
  const [like, setLike] = useState(false)

  const toggle = () => {
    setLike(!like)
    onClick()
  }

  return like ? (
    <FaHeart color="red" size={30} onClick={toggle} />
  ) : (
    <FaRegHeart size={30} onClick={toggle} />
  )
}

export default Like
