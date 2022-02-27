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
        : String(a[itemKeyToCompare]).toLowerCase();
    const itemB =
      typeof b[itemKeyToCompare] === 'number'
        ? b[itemKeyToCompare]
        : String(b[itemKeyToCompare]).toLowerCase();

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
