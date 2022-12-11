export const doAppendClassName = (
  baseClassName: string,
  appendClassName?: string,
) => {
  if (appendClassName) {
    return `${baseClassName} ${appendClassName}`;
  }
  return baseClassName;
};
