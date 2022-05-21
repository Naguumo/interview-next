import { Button, ButtonGroup } from '@chakra-ui/react'

type HeaderProps = {
  items: string[]
  currentItem?: string
  onItemClick: (item: string) => void
}

export const Header = ({ items, onItemClick, currentItem }: HeaderProps) => {
  return (
    <ButtonGroup display='flex' justifyContent='flex-end'>
      {items.map((item) => (
        <Button
          key={item}
          onClick={() => {
            onItemClick(item)
          }}
          isActive={currentItem === item}>
          {item}
        </Button>
      ))}
    </ButtonGroup>
  )
}
