// COMPONENT
const addClassName = (
  className: string | undefined,
  prefixWhiteSpace = true
) => {
  if (!className) return "";
  if (prefixWhiteSpace) return " " + className;
  return className;
};

export default addClassName;
