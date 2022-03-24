import PurviewCatalog from "@azure-rest/purview-catalog";
import PurviewScanning from "@azure-rest/purview-scanning";

const client = PurviewCatalog("https://example.org", {} as any);
const result = await client.path("/atlas/v2/glossary").get();
console.log(result.status);


const scanning = PurviewScanning("https://example.org", {} as any);
const re = await scanning.path("/azureKeyVaults").get();
console.log(re.status);