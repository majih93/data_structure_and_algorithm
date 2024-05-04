// 퀵정렬

// 특정 데이터를 기준으로
// 주어진 배열을 2개의 부분배열로 분할하고,
// 각 부분배열에 대해서 퀵 정렬을 순환적으로 적용하는 방식

// 퀵정렬 알고리즘의 핵심은, 배열을 분할하는 Partition 함수이다.

// 피벗을 첫 번째 요소로 처리한다는 것을 전제로 한다.

function partition(arr) {
  const arrayDividedByPivot = [...arr];

  // left와 right라는 변수로 인덱스 위치를 잡아가면서 처리한다.

  // left는 피벗 우측 인덱스, right는 배열의 마지막 요소에서 시작.

  // left < right 인 범위 내에서
  // left를 우측으로 이동시키고 right를 좌측으로 이동시키면서
  // left는 피벗보다 큰 값을 찾고, right는 피벗보다 작은 값을 찾는다.
  // 그리고 left와 right를 교환한다.

  // left > right가 되면, right와 피벗을 교환해서 pivot의 위치를 찾는다.

  // 코드로 구현해보자.

  let left = 1;
  let right = arrayDividedByPivot.length - 1;

  // 어떻게 반복을 구현하지....
  while (left < right) {
    // left위치 찾기
    while (
      arrayDividedByPivot[left] < arrayDividedByPivot[0] &&
      left < arrayDividedByPivot.length
    ) {
      left++;
    }

    // right위치 찾기.
    while (arrayDividedByPivot[right] > arrayDividedByPivot[0] && right >= 1) {
      right--;
    }

    // left right 비교해서 적절한 처리
    if (left < right) {
      console.log(
        "교환되는 값들",
        arrayDividedByPivot[left],
        arrayDividedByPivot[right]
      );

      // 큰 값이 작은 값보다 좌측에 위치한 경우
      [arrayDividedByPivot[left], arrayDividedByPivot[right]] = [
        arrayDividedByPivot[right],
        arrayDividedByPivot[left],
      ];
    } else {
      console.log(
        "피벗과 right 교환",
        arrayDividedByPivot[right],
        arrayDividedByPivot[0]
      );
      // 큰 경우 -> 피벗과 right를 교환
      [arrayDividedByPivot[0], arrayDividedByPivot[right]] = [
        arrayDividedByPivot[right],
        arrayDividedByPivot[0],
      ];
    }

    console.log(arrayDividedByPivot);
  }

  return arrayDividedByPivot;
}

console.log(partition([30, 50, 17, 40, 88, 15, 44, 55, 22, 11, 66, 13, 85]));
