export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[],
): number[] {
  const tempArr = collection1.concat(collection2).concat(collection3);

  for (let i = 0; i < tempArr.length; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < tempArr.length; j++) {
      if (tempArr[j] > tempArr[maxIndex]) {
        maxIndex = j;
      }
    }
    const temp = tempArr[i];
    tempArr[i] = tempArr[maxIndex];
    tempArr[maxIndex] = temp;
  }

  console.log('tempArr: ', tempArr);
  return tempArr;
}
