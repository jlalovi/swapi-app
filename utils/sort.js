/* eslint-disable no-restricted-globals */
function toNumberIfPossible(item) {
  if (isNaN(item)) {
    return String(item).toLowerCase();
  }
  return Number(item);
}

function sortObjects(
  items, // Array of objects
  itemKeyToCompare, // string
  sortType // desc | asc
) {
  const copyItems = [...items];
  copyItems.sort((a, b) => {
    const itemA =
      typeof a[itemKeyToCompare] === 'number'
        ? a[itemKeyToCompare]
        : toNumberIfPossible(a[itemKeyToCompare]);
    const itemB =
      typeof b[itemKeyToCompare] === 'number'
        ? b[itemKeyToCompare]
        : toNumberIfPossible(b[itemKeyToCompare]);

    if (sortType === 'asc') {
      if (itemA < itemB) return -1;
      if (itemA > itemB) return 1;
      return 0;
    }
    if (sortType === 'desc') {
      if (itemA > itemB) return -1;
      if (itemA < itemB) return 1;
      return 0;
    }
    return 0;
  });

  return copyItems;
}

export { sortObjects };
