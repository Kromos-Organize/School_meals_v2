import NextLink from 'next/link'

export const checkLinkProps = (path: string, external: any) => {
  if (path) {
    return external
      ? {
          component: 'a',
          href: path,
          target: '_blank',
        }
      : {
          component: NextLink,
          href: path,
        }
  }

  return {}
}
