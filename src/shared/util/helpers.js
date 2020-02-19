export const toPersianDigits = str => {
  const id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

  if (typeof str === 'number') {
    str = str.toString()
  }
  return str.replace(/[0-9]/g, function(w) {
    return id[+w]
  })
}
