import { useState } from "react"
import "./ListGroup.css"
import styled from "styled-components"

interface Props {
  items: string[]
  heading: string
  onSelectItem: (item: string) => void
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`
interface ListItemProps {
  active: boolean
}
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${({ active }) => (active ? "blue" : "none")};
`

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items to display!</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(item)
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ListGroup
