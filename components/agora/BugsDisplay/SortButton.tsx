import { Th } from '@chakra-ui/react'

type SortButtonProps = { onClick: () => void; active: boolean }

export const SortButton: React.FC<SortButtonProps> = ({
  onClick,
  active,
  children,
}) => {
  return (
    <Th
      onClick={onClick}
      cursor='pointer'
      className={active ? 'active' : ''}
      sx={{
        '&.active': {
          color: 'blue.300',
        },
        '&:hover': {
          color: 'blue.600',
        },
      }}>
      {children}
    </Th>
  )
}
