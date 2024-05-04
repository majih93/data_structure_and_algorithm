// 선택정렬
// 주어진 배열에서 가장 작은 값부터 차례대로 선택하여 정렬하는 방법

function selectionSort(arr) {
  if (!arr.length) return;

  const sortedArr = [...arr];
  // 0번째 인덱스부터 배열을 탐색 시작.

  // 마지막 요소는 비교할 대상이 없으므로, 뒤에서 2번째 요소까지만 탐색한다.
  for (let i = 0; i < sortedArr.length - 1; i++) {
    // 이번 분기의 최소값의 위치를 저장
    let minValueIndex = i;

    // 다음 인덱스값부터 제일 마지막까지 탐색하여 최소값의 위치를 찾는다.
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] < sortedArr[minValueIndex]) minValueIndex = j;
    }

    // 찾은 최소값과 현재 탐색중인 위치 인덱스의 값을 교환
    [sortedArr[i], sortedArr[minValueIndex]] = [
      sortedArr[minValueIndex],
      sortedArr[i],
    ];
  }

  return sortedArr;
}

console.log(selectionSort([5, 2, 1, 10, 39, 8, 3]));
// 1,2,3,5,8,10,39
