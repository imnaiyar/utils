import { request } from "undici";


/**
 * Posts provided code to hastebin
 * @param code code to post
 */
export async function postToHaste(code: any) {
  const req = await request("https://hst.sh/documents/", {
    method: "POST",
    body: typeof code === "object" ? JSON.stringify(code, null, 2) : code,
  });
  if (req.statusCode !== 200) throw new Error("Status code did not return 200, something went wrong.");

  const bin = await req.body.json();

  return `https://hst.sh/${(bin as {
    key: string
  }).key}.javascript`;
};
