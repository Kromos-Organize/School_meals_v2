import { useTranslation } from 'react-i18next'

import { SwalQuestionType, swalAlertQuestion } from '@/shared'

export const useConfirm = (text: string) => {
  const { t } = useTranslation('confirm')

  const data: SwalQuestionType = {
    // title: t('title'),
    text: text,
    icon: 'warning',
    cancelButtonText: t('L_cancel'),
    confirmButtonText: t('L_confirm'),
  }

  return () =>
    swalAlertQuestion(data).then(res => {
      return res.isConfirmed
    })
}
