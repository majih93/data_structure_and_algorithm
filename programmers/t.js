// 뒤에 큰 수 찾기
function solution(numbers) {
  let answer = Array(numbers.length).fill(-1); // -1로 초기화

  // 뒤에 큰 수를 찾을 수 있는 방법

  // 전체 탐색하면 되겠지만, 그건 답이 아닐 가능성이 높다.
  // 왜냐하면 시간이 그러면 얼마나 걸리는 걸까?
  // 최악의 경우 배열의 길이만큼 배열의 개수만큼 탐색해야 해서 결국 n^2 시간이 소요된다.

  // 그러면 어떻게 시간 효율을 개선할 수 있을까?

  // 반복할 때 마다 저장을 해서 처리를 하는 구조가 되어야 할텐데.

  // 어떻게 특정 값에 대해서 값을 바로 처리 안하고 나중에 이연해서 처리해서 배열 값을 처리할 수 있지?

  // 가장 큰 수를 계속 업데이트 치면서 가면 되지 않나?

  // 지금까지 max고, max를 기준으로 이전을 다 대체해버리면 됨.

  // 그리고 지금까지 한 값을 저장.

  let tempMax = numbers[0];
  let lastIdx = 0;

  // 1번째 요소부터 탐색
  for (let i = 1; i < numbers.length; i++) {
    if (i === 1 && tempMax > numbers[i]) {
      tempMax = numbers[i];
      lastIdx = 1;
    }

    if (numbers[i] > numbers[0] && answer[0] === -1) {
      answer[0] = tempMax;
    }

    if (numbers[i] > tempMax) {
      tempMax = numbers[i];
      for (let j = lastIdx; j <= i - 1; j++) {
        answer[j] = tempMax;
      }
      lastIdx = i;
    }
  }

  return answer;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));

// 대부분의 경우에 실패
// 가닥은 맞게 잡았을 거같은데 디테일을놓친 부분이 있을 듯 하다.
