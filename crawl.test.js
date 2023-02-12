const {normalizeURL, getURLsFromHTML} = require('./crawl')
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

test('getURLsFromHTML absolute', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="https://blog.boot.dev"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ 'https://blog.boot.dev/' ]
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ 'https://blog.boot.dev/path/one' ]
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML both', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="https://other.com/path/one"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ 'https://blog.boot.dev/path/one', 'https://other.com/path/one' ]
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML handle error', () => {
  const inputURL = 'https://blog.boot.dev'
  const inputBody = '<html><body><a href="path/one"><span>Boot.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ ]
  expect(actual).toEqual(expected)
})