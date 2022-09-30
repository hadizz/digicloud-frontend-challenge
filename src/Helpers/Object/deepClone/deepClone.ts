const deepClone = (obj: any): any => JSON.parse(JSON.stringify(obj));

export default deepClone;
