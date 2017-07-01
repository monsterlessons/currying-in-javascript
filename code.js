var objects = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
]

var get = curry(function (property, object) {
  return object[property]
})

var map = curry(function (fn, values) {
  return values.map(fn)
})

var getIds = map(get('id'))

console.log(getIds(objects))

//----------------------------------------------------------------------
var fetchFromServer = function () {
  return new Promise(function (resolve) {
    resolve({
      user: 'Jack',
      posts: [
        {
          title: 'why curry?'
        },
        {
          title: 'functional programming'
        }
      ]
    })
  })
}

fetchFromServer()
  .then(get('posts'))
  .then(map(get('title')))
  .then(function (titles) {
    console.log('titles', titles)
  })
