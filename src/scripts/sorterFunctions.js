// this works because you create a copy by using slice.
// but to make it easy to read, you can create a constant called clonedArray and then do the sorting
// to make it shorter you can name stuff array and key we know by context that they are part of the object
export function dataSort(array, key) {
  const clonedArray = array.slice();

  return clonedArray.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

export function reverseSort(objArray, objSortKey) {
  return objArray
    .slice()
    .sort((objA, objB) => (objA[objSortKey] < objB[objSortKey] ? 1 : -1));
}
