const privacy = require('./index.js')

test('fragment', () => {
  expect(privacy.fragment('abcdefgi','####',2,6)).toEqual("ab####i")
})

test('mobile', () => {
  expect(privacy.mobile('13800000000')).toEqual('138****0000')
  expect(privacy.mobile('+86-13800000000')).toEqual('+86-138****0000')
})

test('phoneNumber', () => {
  expect(privacy.phoneNumber('13800000000')).toEqual('138****0000')
})

test('email', () => {
  expect(privacy.email('a@163.com')).toEqual('*@163.com')
  expect(privacy.email('ab@163.com')).toEqual('**@163.com')
  expect(privacy.email('abc@163.com')).toEqual('ab*@163.com')
  expect(privacy.email('ihavecoke@163.com')).toEqual('ih*******@163.com')
})

test('idCard', () => {
  expect(privacy.idCard('510122199102132018')).toEqual('510***19******2018')
})

test('name', () => {
  expect(privacy.name('ihavecoke')).toEqual('*')
  expect(privacy.name('i havecoke')).toEqual('*havecoke')
  expect(privacy.name('i have coke')).toEqual('*coke')
})

test('all', () => {
  expect(privacy.all('all-will-be-*')).toEqual('*************')
})
