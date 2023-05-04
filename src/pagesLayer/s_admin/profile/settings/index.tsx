import { getSAdmin, useSAdminStore } from '@/entities'

export const SettingsPage = () => {
  const s_admin = useSAdminStore(getSAdmin)

  return (
    <>
      {s_admin.fname} {s_admin.name}
    </>
  )
}
