import Swal from 'sweetalert2'

type SwalIconType = 'success' | 'error' | 'warning'

type SwalType = {
  title: string
  html: string
  icon: SwalIconType
}

export type SwalQuestionType = {
  title?: string
  text: string
  icon: SwalIconType
  cancelButtonText: string
  confirmButtonText: string
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

export const swalAlertQuestion = async (data: SwalQuestionType) =>
  Swal.fire({
    title: data.title ?? '',
    text: data.text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#6366F1',
    cancelButtonColor: '#F04438',
    cancelButtonText: data.cancelButtonText,
    confirmButtonText: data.confirmButtonText,
  })

export const swalAlertError = async (text: string) =>
  Swal.fire({
    // title: data.title ?? '',
    text,
    icon: 'error',
    showConfirmButton: false,
    timer: 1500,
  })
