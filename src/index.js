import settings from "./settings"

var blobUri = `https://${settings.STORAGE_ACCOUNT}.blob.core.windows.net`
var blobService = AzureStorage.createBlobServiceWithSas(blobUri, settings.SAS_TOKEN)

blobService.listContainersSegmented(null, function (error, results) {
    if (error) {
        // List container error
        console.log(1, "error", error)
    } else {
        for (var i = 0, container; container = results.entries[i]; i++) {
            // Deal with container object
            console.log(2, "container", container)
        }
    }
})

console.log(1)
