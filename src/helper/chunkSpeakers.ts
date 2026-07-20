export function chunkArray(
  arr: {
    actor: string;
    title: string;
    imgUrl: string;
  }[],
  size: number,
) {
  const chunks = [];
  for (let idx = 0; idx < arr.length; idx += size) {
    chunks.push(arr.slice(idx, idx + size));
  }
  return chunks;
}
