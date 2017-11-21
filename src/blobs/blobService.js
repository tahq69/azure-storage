import settings from "./../settings"

var blobUri = `https://${settings.STORAGE_ACCOUNT}.blob.core.windows.net`
var blobService = AzureStorage.createBlobServiceWithSas(blobUri, settings.SAS_TOKEN)
    .withFilter(new AzureStorage.ExponentialRetryPolicyFilter())

export default blobService
