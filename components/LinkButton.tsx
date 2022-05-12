import { Button } from '@chakra-ui/react'
import Link from 'next/link'

type LinkButtonProps = {
  label: string
  href: string
}

export const LinkButton = ({ label, href }: LinkButtonProps) => {
  return (
    <Link passHref href={href}>
      <Button as='a' size='lg' margin={3}>
        {label}
      </Button>
    </Link>
  )
}

export default LinkButton
