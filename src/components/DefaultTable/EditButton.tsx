import { useNavigate } from 'react-router'

import { Size } from '../../constants'
import { IconButton } from '../../elements/IconButton'
import { Edit } from '../../icons'

export type EditButtonProps = {
  basePath: string
  id: number
  title: string
}
export function EditButton({ basePath, id, title }: EditButtonProps) {
  const navigate = useNavigate()

  return (
    <IconButton
      Icon={Edit}
      onClick={() => {
        navigate(`${basePath}/${id}`)
      }}
      size={Size.SMALL}
      title={title}
    />
  )
}
