const isArraySecure = (arr?: unknown): boolean => {
  if (Array.isArray(arr)) {
    if (arr.length !== 0) {
      // @ts-ignore
      const filteredArr = arr.filter((i) => {
        if (Array.isArray(i)) {
          return isArraySecure(i);
        }
        if (typeof i === 'object') {
          return Object.keys(i).length !== 0;
        }
        return i === 0 ? true : !!i;
      });

      return filteredArr.length !== 0;
    }
    return false;
  }
  return false;
};

export default isArraySecure;
