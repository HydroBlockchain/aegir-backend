import { ImakeFileObject } from "../interfaces/Iweb3Storage";
import { CIDString, File, Filelike, Web3Response, Web3Storage } from "web3.storage";

function getAccessToken() {
  return process.env.WEB3STORAGE_TOKEN || '';
}

export function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() })
}

export function makeFileObject({obj, filename, options = {}}: ImakeFileObject) {
  return new File([ Buffer.from(JSON.stringify(obj)) ], filename, options);
}

export async function storeFiles(files: Iterable<Filelike>): Promise<CIDString> {
  const client = makeStorageClient();
  return await client.put(files);
}

export async function deleteFile(cid: string) {
  try {
    const client = makeStorageClient();
    await client.delete(cid);
  } catch(error) {
    console.log(error);
  }
}

export async function retrieveFiles(cid: string): Promise<Web3Response | null> {
  const client = makeStorageClient()
  return await client.get(cid);
}
