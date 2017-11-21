import blobService from "./blobService"
import BlobContainer from "./BlobContainer"

export default class BlobStorage {
  constructor() {
    this._containers = []
  }

  getContainers() {
    return new Promise((resolve, reject) => {
      if (this._containers.length > 0) {
        resolve(this._containers)
        return
      }

      blobService.listContainersSegmented(null, (error, results) => {
        if (error) {
          reject(error)
          return
        }

        for (var i = 0, container; (container = results.entries[i]); i++) {
          // Deal with container object
          this._containers.push(new BlobContainer(container))
        }

        resolve(this._containers)
      })
    })
  }

  getContainer(name) {
    return new Promise((resolve, reject) => {
      this.getContainers().then(containers => {
        var container = containers.filter(c => c.name === name)[0]
        if (container) resolve(container)
        else reject("Container not found")
      })
    })
  }
}
