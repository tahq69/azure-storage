import blobService from "./blobService"

export default class BlobContainer {
  constructor(container) {
    this.name = container.name
    this._container = container
    this._blobs = []
  }

  getBlobs() {
    var name = this._container.name
    return new Promise((resolve, reject) => {
      if (this._blobs.length == 0) {
        resolve(this._blobs)
        return
      }

      blobService.listBlobsSegmented(name, null, (error, results) => {
        if (error) {
          // List blobs error
          reject(error)
          return
        }

        for (var i = 0, blob; (blob = results.entries[i]); i++) {
          // Deal with blob object
          this._blobs.push(blob)
        }

        resolve(this._blobs)
      })
    })
  }
}
