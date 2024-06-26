// 버블 정렬

// 모든 인접한 두 데이터를 차례대로 비교해서 왼쪽데이터가 더 큰 경우에는 오른쪽 데이터와 자리를 바꾸는 과정을 반복해서 정렬을 수행

// 비교를 진행하는 방향에 따라서 처리 방식이 조금 다름

// 왼쪽 -> 오른쪽으로 비교
// 가장 큰 값부터 찾아서 오른쪽 끝에서부터 위치시키면서 정렬

function bubbleSort_left_to_right(arr) {
  const sortedArr = [...arr];

  // i stands for 결정된 자리라고 생각해보자 그러면 뒤에서부터 결정되어야 하니까..
  // 마지막 자리는 알아서 결정되므로, 마지막에서 직전 자리까지 비교해서 결정해주어야 함
  for (let i = sortedArr.length - 1; i > 0; i--) {
    // 왼쪽에서 오른쪽으로 비교이므로 항상 0번째 인덱스에서부터 비교 시작
    let curIndex = 0;
    // while문을 통해서 curIndex가 비교해야하는 마지막 인덱스까지 반복되도록 처리
    // [1,2,3,4,5]의 경우, first iteration에서 3번째 인덱스 값까지 다음 자리와 비교가 이루어져야 함. 즉 이번에 결정하는 자리 바로 직전 자리까지.
    while (curIndex < i) {
      if (sortedArr[curIndex] > sortedArr[curIndex + 1]) {
        [sortedArr[curIndex], sortedArr[curIndex + 1]] = [
          sortedArr[curIndex + 1],
          sortedArr[curIndex],
        ];
      }

      curIndex++;
    }
  }

  return sortedArr;
}

console.log(bubbleSort_left_to_right([12, 2, 1, 8, 6, 9, 10, 11]));

// 오른쪽 -> 왼쪽으로 비교
// 가장 작은 값부터 찾아서 왼쪽 끝에서부터 위치시키면서 정렬
function bubbleSort_right_to_left(arr) {
  const sortedArr = [...arr];

  // i stands for 결정된 자리라고 생각해보자 그러면 뒤에서부터 결정되어야 하니까..
  // 마지막 자리는 알아서 결정되므로, 마지막에서 직전 자리까지 비교해서 결정해주어야 함
  for (let i = 0; i < sortedArr.length - 1; i++) {
    // 왼쪽에서 오른쪽으로 비교이므로 항상 0번째 인덱스에서부터 비교 시작
    let curIndex = sortedArr.length - 1;
    // while문을 통해서 curIndex가 비교해야하는 마지막 인덱스까지 반복되도록 처리
    // [1,2,3,4,5]의 경우, first iteration에서 3번째 인덱스 값까지 다음 자리와 비교가 이루어져야 함. 즉 이번에 결정하는 자리 바로 직전 자리까지.
    while (curIndex > i) {
      if (sortedArr[curIndex] < sortedArr[curIndex - 1]) {
        [sortedArr[curIndex], sortedArr[curIndex - 1]] = [
          sortedArr[curIndex - 1],
          sortedArr[curIndex],
        ];
      }

      curIndex--;
    }
  }

  return sortedArr;
}

// console.log(bubbleSort_right_to_left([12, 2, 1, 8, 6, 9, 10, 11]));

// 내가 작성한 버블 정렬은 개선할 여지가 하나 남아있다.

// 만약에 정렬이 완료된 경우, 더이상 비교연산이 필요없는데 위에 작성한 코드상으로는 정해진 수의 비교 처리가 계속 진행됨.

// 한 분기의 비교를 다 완료했는데, 자리바꿈이 전혀 없었다면 이미 배열이 정렬되어 있다고 볼 수 있다. 그러면 해당 시점에 반복문을 종료시키면 됨.

function improved_bubbleSort(arr) {
  const sortedArr = [...arr];

  for (let i = sortedArr.length - 1; i > 0; i--) {
    console.log(sortedArr);
    let curIndex = 0;
    // 비교를 통한 자리 변화가 일어났는지 여부 판단하는 state 추가
    let hasChanged = false;
    while (curIndex < i) {
      if (sortedArr[curIndex] > sortedArr[curIndex + 1]) {
        [sortedArr[curIndex], sortedArr[curIndex + 1]] = [
          sortedArr[curIndex + 1],
          sortedArr[curIndex],
        ];
        hasChanged = true;
      }

      curIndex++;
    }

    // 만약에 비교를 통한 변화가 없었다면 비교를 종료
    if (!hasChanged) {
      break;
    }
  }

  return sortedArr;
}

console.log(improved_bubbleSort([1, 2, 3, 4, 5]));

// 정렬된 배열인 경우 반복문이 1회만 수행된다.
