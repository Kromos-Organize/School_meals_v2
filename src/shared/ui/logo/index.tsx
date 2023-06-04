import Image from 'next/image'
import { FC } from 'react'

/*eslint import/no-unresolved: 0*/
import pathLogo from '~/icons_logo_svg.svg'

type PropsType = {
  w: number
  h: number
  alt?: string
}

export const Logo: FC<PropsType> = ({ w, h, alt }) => (
  <Image src={pathLogo} width={w} height={h} alt={alt ? alt : 'Logo'} />
)
