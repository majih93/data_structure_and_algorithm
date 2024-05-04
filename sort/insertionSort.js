// 삽입정렬

// 주어진 데이터를 하나씩 뽑은 후, 이미 나열된 데이터가 항상 정렬된 상태를 유지하도록 뽑은 데이터를 바른 위치에 삽입해서 나열하는 방식

function insertionSort(arr) {
  if (arr.length < 2) return arr;

  const sortedArr = [...arr];

  // 0번째 인덱스까지 정렬된 배열이라고 치고, 1번째 인덱스 값부터 정렬된 부분에 어디에 들어가야 하는지 찾는다.

  for (let i = 1; i < sortedArr.length; i++) {
    // 정렬된 배열에서 자리를 찾는다.
    // 비교를 시작하는 자리를 j값의 시작점으로 삼고, j와 j-1번 인덱스를 비교하므로 j가 1일때, 1번째 인덱스값과 0번째 인덱스값이 비교되어 마지막 비교작업이 이루어진다.
    for (let j = i; j >= 1; j--) {
      if (sortedArr[j] < sortedArr[j - 1]) {
        [sortedArr[j], sortedArr[j - 1]] = [sortedArr[j - 1], sortedArr[j]];
      } else {
        // 교환이 이루어지지 않으면 자리를 찾았다는 의미이므로 반복문을 종료시켜야 한다.
        break;
      }
    }
  }

  return sortedArr;
}

console.log(insertionSort([10, 1, 2, 8, 5, 20, 15]));
