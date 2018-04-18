import wepy from 'wepy'

export const modal = async (title, content, cancelText, cancelColor, confirmText, confirmColor, confirm, cancel) => {
  const showModal = await wepy.showModal({
    title: title || '是否拒绝微信授权？',
    content: content || '拒绝授权将无法获取到相应信息而影响使用',
    cancelText: cancelText || '取消',
    cancelColor: cancelColor || '#000',
    confirmText: confirmText || '确定',
    confirmColor: confirmColor || '#3CC51F',
  })
  if (showModal.confirm) {
    confirm && confirm()
  }
  if (showModal.cancel) {
    cancel && cancel()
  }
}
