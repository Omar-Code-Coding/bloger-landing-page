export default function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const arr = [1, 4, 3, 49, 12];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const mergeArr = [];
  let l = 0;
  let r = 0;

  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] < rightArr[r]) {
      mergeArr.push(leftArr[l]);
      l++;
    } else {
      mergeArr.push(rightArr[r]);
      r++;
    }
  }

  return [...mergeArr, ...leftArr.slice(l), ...rightArr.slice(r)];
}

console.log(mergeSort(arr));
