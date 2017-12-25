const CIStorage = require('ci-storage')
console.log('CIStorage', CIStorage)

var myStorage = new CIStorage('test')
console.log('myStorage', myStorage)
myStorage.setItem('name', 'burning')
console.log('name', myStorage.getItem('name'))
