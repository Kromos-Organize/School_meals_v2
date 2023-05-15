import Swal from 'sweetalert2'

type SwalType = {
  title: string
  html: string
  icon: 'success' | 'error'
}

export const swalAlert = async (data: SwalType, type: 'withBtn' | 'noBtn' = 'withBtn') => {
  switch (type) {
    case 'withBtn':
      return await Swal.fire({ title: data.title, html: data.html, icon: data.icon })
    case 'noBtn':
      return await Swal.fire({
        title: data.title,
        html: data.html,
        icon: data.icon,
        showConfirmButton: false,
        timer: 1500,
      })
  }
}
