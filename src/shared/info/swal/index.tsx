import Swal from 'sweetalert2'

type SwalType = {
  title: string
  html: string
  icon: 'success' | 'error'
}

export const swalAlert = async (data: SwalType) => {
  return await Swal.fire(data.title, data.html, data.icon)
}
