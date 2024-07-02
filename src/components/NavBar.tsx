import React from "react"

interface Props {
  cartItemsCount: number
}
const NavBar = ({ cartItemsCount }: Props) => {
  return <div>CartItems: {cartItemsCount}</div>
}

export default NavBar
