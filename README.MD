# ci-storage
CafeInit simple storage for browser


## Install

```
npm install ci-storage --save
```

## Usage

```javascript
const CIStorage = require('ci-storage')

/**
* @param name {string}
*/
const book = new CIStorage('book')

book.setData({
  title: 'Book Titile',
  author: 'burning',
  price: '19.00'
})

console.log(book.getItem('title'))
book.setItem('title', 'This is My First JavaScript Book')
console.log(book.getItem('title'))
console.log(book.getDate())
```


## Borswer

```html
<script src="ci-storage.js"></script>
```

```javascript
const book = new CIStorage('book')

book.setData({
  title: 'Book Titile',
  author: 'burning',
  price: '19.00'
})

console.log(book.getItem('title'))
book.setItem('title', 'This is My First JavaScript Book')
console.log(book.getItem('title'))
console.log(book.getDate())
```
