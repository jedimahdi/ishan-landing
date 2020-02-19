import {toPersianDigits} from '../helpers'

test('convert engilsh numbers to persian', () => {
  expect(toPersianDigits(2)).toEqual('۲')
  expect(toPersianDigits(1234567890)).toEqual('۱۲۳۴۵۶۷۸۹۰')
  expect(toPersianDigits('1234567890')).toEqual('۱۲۳۴۵۶۷۸۹۰')
  expect(toPersianDigits('test123test4567890test')).toEqual(
    'test۱۲۳test۴۵۶۷۸۹۰test',
  )
})
