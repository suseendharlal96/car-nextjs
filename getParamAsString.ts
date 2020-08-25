export const getParamAsStrings = (value: string | Array<string>): string => {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
};
