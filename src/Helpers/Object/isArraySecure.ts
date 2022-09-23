const isArraySecure = (arr: unknown) =>
  Array.isArray(arr) && arr.length !== 0 && !!arr?.[0];

export default isArraySecure;
