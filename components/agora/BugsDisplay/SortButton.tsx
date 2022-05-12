import { chakra } from '@chakra-ui/react'

type SortButtonProps = { onClick: () => void; active: boolean }

export const SortButton: React.FC<SortButtonProps> = ({
  onClick,
  active,
  children,
}) => {
  return (
    <chakra.th
      onClick={onClick}
      cursor='pointer'
      className={active ? 'active' : ''}
      color='black'
      sx={{
        '&.active': {
          color: 'blue',
        },
      }}>
      {children}
    </chakra.th>
  )
}
