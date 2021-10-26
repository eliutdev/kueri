const toKebabCase = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

const parseUnit = (unit: string | number): string | number => {
  return typeof unit === "number" ? `${unit}px` : unit;
};

export const getMatcher = (key: string, value: string): string => {
  return `(${toKebabCase(key)}: ${parseUnit(value)})`;
};
