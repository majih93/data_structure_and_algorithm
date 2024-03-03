// permutations(순열)

// 가능한 모든 숫자의 조합(순서를 고려한, 즉 다른 순서는 다른 조합이다.)
// 가장 간단한 형태의 백트래킹 문제 풀이 개념
// Stack을 활용해서 풀어내보자.

// how?

// 순서가 중요하다.
// 즉 첫 번째 숫자부터 for문 돌면서 숫자 push/pop하고 마지막 순서의 for loop에서 해당 시점의 stack을 복사해서 결과 배열에 push 하는 형태로풀면 되지 않을까?

function permute(nums) {
  const answer = [];

  // 상황별 데이터 처리 여부 저장할 배열
  const data = Array(nums.length).fill(0);
  const stack = [];

  function recursive(idx) {
    // 가장 단순한 형태로 우선 구현해보자.
    if (stack.length === nums.length) return [...stack];

    stack.push(nums[idx]);
    const nextIdx = idx + 1;
    recursive(nextIdx);
  }

  recursive(0);

  console.log(stack);

  return answer;
}

permute([1, 2, 3, 4]);
