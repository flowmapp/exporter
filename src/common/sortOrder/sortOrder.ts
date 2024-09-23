type CompareResult = -1 | 0 | 1;

const compare = (a: string, b: string): CompareResult => {
  if (a === b) return 0;

  return a > b ? 1 : -1;
};

const insert = (alphabet: string[], a?: string, b?: string) => {
  a = a ?? '';
  b = b ?? '';
  if (!a && !b) return alphabet[1];
  if (!b) {
    const rightSymbol = a[a.length - 1];
    const rightSymbolIndex = alphabet.indexOf(rightSymbol);
    const nextSymbol = alphabet[rightSymbolIndex + 1];
    if (nextSymbol) return a.slice(0, -1) + nextSymbol;

    return a + alphabet[0];
  }

  const maxLength = Math.max(a.length, b.length);
  let value = '';
  for (let i = 0; i < maxLength + 1; i++) {
    const aIndex = a[i] != null ? alphabet.indexOf(a[i]) : 0;
    const bIndex = b[i] != null ? alphabet.indexOf(b[i]) : alphabet.length;
    const diff = bIndex - aIndex;
    if (diff > 1) {
      value += alphabet[aIndex + Math.round(diff / 2)];
      break;
    }
    value += a[i] || alphabet[0];
  }

  return value;
};

export const makeSortOrder = (alphabet: string[]) => {
  alphabet = alphabet.sort();

  return {
    compare,
    insert: (a?: string, b?: string): string => {
      return insert(alphabet, a, b);
    },
  };
};
