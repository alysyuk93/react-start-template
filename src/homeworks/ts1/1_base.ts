/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (string: string) => string.replace(/^\+/, '');

export const addPlus = (string: string) => `+${string}`;

export const removeFirstZeros = (value: string) => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: number, separator = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2) => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

type Point = {
  x: number;
  y: number;
};

export const getTransformFromCss = (transformCssString: string): Point => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export const getColorContrastValue = (rgb: number[]): number => {
  const [red, green, blue] = rgb;
  return Math.round((red * 299 + green * 587 + blue * 114) / 1000);
};

export const getContrastType = (contrastValue: number): string => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): never => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): number[] => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(2, 3), 16);
    const blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

type NumberedArrayItem = {
  value: string;
  number: number;
};

export const getNumberedArray = (arr: string[]): NumberedArrayItem[] =>
  arr.map((value: string, number: number) => ({ value, number }));
export const toStringArray = (arr: NumberedArrayItem[]): string[] =>
  arr.map(({ value, number }) => `${value}_${number}`);

type Customer = {
  id: number;
  name: string;
  age: number;
  isSubscribed: boolean;
};

export const transformCustomers = (
  customers: Customer[]
): { [id: number]: { name: string; age: number; isSubscribed: boolean } } => {
  return customers.reduce(
    (
      acc: { [x: string]: { name: string; age: number; isSubscribed: boolean } },
      customer: { id: number; name: string; age: number; isSubscribed: boolean }
    ) => {
      acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
      return acc;
    },
    {}
  );
};
