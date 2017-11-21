import BlobStorage from "./blobs/BlobStorage"

var blobStorage = new BlobStorage()
blobStorage
  .getContainer("uploads")
  .then(container => {
    return container.getBlobs()
  })
  .then(blobs => {
    console.log({ blobs: blobs })
  })

console.log(1)
