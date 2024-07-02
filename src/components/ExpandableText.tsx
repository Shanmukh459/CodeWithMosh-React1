import React, { useState } from "react"

interface Props {
  maxChars?: number
  children: string
}

const ExpandableText = ({ maxChars = 100, children }: Props) => {
  const [buttonText, setButonText] = useState("More")

  const toggle = () => {
    setButonText((prev) => (prev === "More" ? "Less" : "More"))
  }

  if (children.length < maxChars) return <p>{children}</p>

  return (
    <div>
      {buttonText === "More" ? children.slice(0, maxChars) + "..." : children}
      <button onClick={toggle}>{buttonText}</button>
    </div>
  )
}

export default ExpandableText
