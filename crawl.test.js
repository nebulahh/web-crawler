const {normalizeURL} = require('./crawl')
const {test, expect} = require('@jest/globals')


test('normalize url', () => {
  const input = 'https://blog.boot.dev/path'
  const actual = normalizeURL(input)
  const expectOutput = 'blog.boot.dev/path'
  expect(actual).toEqual(expectOutput)
})

test('normalize url strip trailing slashes', () => {
  const input = 'https://blog.boot.dev/path/'
  const actual = normalizeURL(input)
  const expectOutput = 'blog.boot.dev/path'
  expect(actual).toEqual(expectOutput)
})


test('normalizeurl uppercase', () => {
  const input = 'https://BLOG.boot.dev/path/'
  const actual = normalizeURL(input)
  const expectOutput = 'blog.boot.dev/path'
  expect(actual).toEqual(expectOutput)
})

test('normalizeurl strip http', () => {
  const input = 'https://blog.boot.dev/path/'
  const actual = normalizeURL(input)
  const expectOutput = 'blog.boot.dev/path'
  expect(actual).toEqual(expectOutput)
})

