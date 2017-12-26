/**
 * @fileoverview CIStorage
 * @author burning <www.cafeinit.com>
 * @version 2017.12.21
 */

let _name = ''
let _storage = null
let _data = null

class CIStorage {
  constructor(name, storage) {
    this.version = '1.0.5'
    _name = name
    _storage = storage || window.sessionStorage
    this.getData()
  }

  getData() {
    let data = _storage.getItem(_name)
    if (data) {
      data = JSON.parse(data)
    }
    _data = data
    return data
  }

  setData(data) {
    // console.log('CIStorage.setData', typeof data, data)
    _data = data
    _storage.setItem(_name, JSON.stringify(data))
  }

  removeData() {
    _storage.removeItem(_name)
  }

  getItem(name) {
    // console.log('CIStorage.getItem', name)
    if (_data) {
      return _data[name]
    }
    else {
      return null
    }
  }

  setItem(name, value) {
    // console.log('CIStorage.setItem', name, value)
    if (!_data) {
      this.setData({})
    }

    _data[name] = value
    _storage.setItem(_name, JSON.stringify(_data))
  }

  removeItem(name) {
    let data = this.getData()
    delete data[name]

    _data = data
    _storage.setItem(_name, JSON.stringify(_data))
  }
}

module.exports = CIStorage

// Allow use of default import syntax in TypeScript
module.exports.default = CIStorage
