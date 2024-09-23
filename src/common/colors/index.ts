export const SPECIAL_COLOR = '#1f1f1f';

export const defaultBlueColor = '#6696ff';
export const defaultGreyColor = '#c2c2c2';
export const defaultGreenColor = '#36eb8d';

export type PaletteColorName =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'electric'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'gray'
  | 'black';

type Palette = { name: PaletteColorName; value: string; textColor?: string }[];

export const colorsPalette: Palette = [
  { name: 'red', value: '#ff7070', textColor: '#662D2D' },
  { name: 'orange', value: '#ffa334', textColor: '#664115' },
  { name: 'yellow', value: '#f5cc00', textColor: '#625200' },
  { name: 'green', value: defaultGreenColor, textColor: '#165E38' },
  { name: 'electric', value: '#3af3ff', textColor: '#176166' },
  { name: 'blue', value: defaultBlueColor, textColor: '#293C66' },
  { name: 'purple', value: '#9b70ff', textColor: '#352666' },
  { name: 'pink', value: '#ff99ff', textColor: '#663D66' },
  { name: 'gray', value: '#adadad' },
  {
    name: 'black',
    value: SPECIAL_COLOR,
    textColor: 'Your black text color here',
  },
];

export const primitivesPalette: Palette = [
  { value: '#1f1f1f', name: 'black' },
  { value: '#999', name: 'gray' },
];

export const generateRandomColor = () => {
  return colorsPalette[Math.floor(Math.random() * colorsPalette.length)].value;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};

// from https://stackoverflow.com/a/5624139
function hexToRgb(hex: string): RGB | null {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (_, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function hexToRgbOpacity(hex: string, opacity: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    throw new Error('Invalid hex format');
  }
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity / 100})`;
}

function findTitleColorForBackground(hexColor: string): string {
  const result = colorsPalette.find(
    (item) => hexColor.toLowerCase() === item.value.toLowerCase()
  );
  return result?.textColor || SPECIAL_COLOR;
}

export function generateTemplateColors(hexColor: string) {
  const baseOpacity = 16;
  const hoverOpacity = 32;

  const background = hexToRgbOpacity(hexColor, baseOpacity);
  const backgroundHover = hexToRgbOpacity(hexColor, hoverOpacity);

  const titleColor = findTitleColorForBackground(hexColor);

  return {
    background,
    backgroundHover,
    titleColor,
  };
}

// https://stackoverflow.com/questions/23990802/find-nearest-color-from-a-colors-list
function getColorsDistance(a: RGB, b: RGB) {
  return Math.sqrt(
    Math.pow(a.r - b.r, 2) + Math.pow(a.g - b.g, 2) + Math.pow(a.b - b.b, 2)
  );
}

function getNearestColorFromPalette(color: string): {
  name: PaletteColorName;
  value: string;
} {
  let lowest = Number.POSITIVE_INFINITY;
  let result: { name: PaletteColorName; value: string } | null = null;
  const colorRgb = hexToRgb(color);
  if (!colorRgb) throw new Error('Invalid color format');
  for (const paletteColor of colorsPalette) {
    const paletteColorRgb = hexToRgb(paletteColor.value);
    if (!paletteColorRgb) continue;
    const distance = getColorsDistance(colorRgb, paletteColorRgb);
    if (distance < lowest) {
      lowest = distance;
      result = paletteColor;
    }
  }
  return result!;
}

const legacyColorsMap: Record<string, PaletteColorName> = {
  '#ca0602': 'red',
  '#ffa33f': 'orange',
  '#ffd663': 'yellow',
  '#008e80': 'green',
  '#29a32f': 'green',
  '#50e3c2': 'green',
  '#76c5e2': 'electric',
  '#549db3': 'blue',
  '#0080ff': 'blue',
  '#58a8f7': 'blue',
  '#848dea': 'purple',
  '#fe85bf': 'pink',
  '#5f7dao': 'gray',
  '#ffffff': 'gray',
  '#101723': 'black',
};

export function getNewColorFromV2(color: string) {
  const matchColorName = legacyColorsMap[color.toLowerCase()];
  if (matchColorName) {
    return colorsPalette.find((c) => c.name === matchColorName)?.value ?? color;
  }
  const newColor = getNearestColorFromPalette(color);
  return newColor.value;
}
