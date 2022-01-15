import { Buckets } from '@textile/hub'


const keyInfo = {
  key: process.env.REACT_APP_TEXTILE_KEY, 
  secret: process.env.REACT_APP_TEXTILE_SECRET
}

const bucketName = process.env.REACT_APP_BUCKET_NAME;

var jsonToArray = function(json)
{
	var str = JSON.stringify(json, null, 0);
	var ret = new Uint8Array(str.length);
	for (var i = 0; i < str.length; i++) {
		ret[i] = str.charCodeAt(i);
	}
	return ret
};

export async function pushJSONDocument  (json) {
  const buckets = await Buckets.withKeyInfo(keyInfo)
  const { root } = await buckets.getOrCreate(bucketName)
  if (!root) throw new Error('bucket not created')
  const buf = jsonToArray(json)
  const path = `metadata.json`
  const links = await buckets.pushPath(root.key, path, buf)
  return `https://hub.textile.io${links.path.path}`;
}

export async function pushImage(content, path) {
  const buckets = await Buckets.withKeyInfo(keyInfo);
  const { root } = await buckets.getOrCreate(bucketName)
  if (!root) throw new Error('bucket not created')
  const links = await buckets.pushPath(root.key, path, content)
  return `https://hub.textile.io${links.path.path}`;
}
