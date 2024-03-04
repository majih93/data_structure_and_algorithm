// 주어진 배열에서 원소들의 합이 x인 부분 배열 구하는 해법

// 먼저 답을 보기 전에 내가 알아보자.
function my_solution(nums, x) {
  let answer = 0;
  let p1 = 0;
  let p2 = 0;

  let sum = nums[0];

  // 어쨌든 반복을 해야하는데,
  // 구간을 계속 늘려가면서 처리를 해야한다.
  // '연속'이라는 단어가 키워드겠다.
  // 0/1을 통해서 값을 구한다.
  // 0부터 시작한다. 만약에 0번째 인덱스 값이 더 크거나 같은 경우 처리하고 둘 다
  // 2번째 인덱스로 이동시킨다.
  // p1이 위치한 값이 x보다 작은 경우, p2를 우측으로 한 칸 이동.
  // sum에 p2값을 더하고, sum이 작은 경우 p2다시 이동하고 더하는 처리 반복.
  // sum 이 같은 경우 -> 기록 후 p1을 한 칸 우측으로 이동해서 원래 있던 위치의 값을 sum에서뺸다.
  // sum이 더 큰 경우 -> p1을 한칸 우측으로 이동해서 원래 있던 위치의 값을 sum에서 뺀다.
  // while문을 통해서 반복을 구현한다.
  // while 문의 종료조건은?
  // P1, p2가 모두 인덱스값이 벗어났을 때.
  while ((p1 < nums.length, p2 < nums.length)) {
    // sum값에 따른 처리
    if (sum < x) {
      p2++;
      sum += nums[p2];
    } else if (sum === x) {
      answer++;
      sum -= nums[p1];
      p1++;
    } else {
      // 더 커진 경우
      sum -= nums[p1];
      p1++;
    }
  }

  return answer;
}

console.log(my_solution([1, 3, 6, 5, 2, 7, 9], 9)); // 3
console.log(my_solution([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3

