import PurviewCatalog from "@azure-rest/purview-catalog";

const client = PurviewCatalog("https://foo.com", {} as any);
const result = await client.path("/atlas/v2/glossary").get();
console.log(result.status);
