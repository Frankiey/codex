import { AzureCliCredential } from "@azure/identity";

const credential = new AzureCliCredential();
const scope = "https://cognitiveservices.azure.com/.default";

/**
 * Fetches a bearer token using the logged in Azure CLI session.
 * Users should run `az login` prior to invoking the CLI.
 */
export async function azureCliTokenProvider(): Promise<string> {
  const token = await credential.getToken(scope);
  return token.token;
}
