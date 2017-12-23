/**
 * @fileoverview CIStorage
 * @author burning
 * @version 2017.12.21
 */

class CIStorage {
  constructor(name, storage) {
    this._name = name
    this._storage = storage || window.sessionStorage
    this.getData()
  }

  getData() {
    let data = this._storage.getItem(this._name)
    if (data) {
      data = JSON.parse(data)
    }
    this._data = data
    return data
  }

  setData(data) {
    // console.log('CIStorage.setData', typeof data, data)
    this._data = data
    this._storage.setItem(this._name, JSON.stringify(data))
  }

  getItem(name) {
    // console.log('CIStorage.getItem', name)
    if (this._data) {
      return this._data[name]
    }
    else {
      return null
    }
  }

  setItem(name, value) {
    // console.log('CIStorage.setItem', name, value)
    if (!this._data) {
      this.setData({})
    }

    this._data[name] = value
    this._storage.setItem(this._name, JSON.stringify(this._data))
  }
}

export default CIStorage
