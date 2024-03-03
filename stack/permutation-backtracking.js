// permutations(순열)

// 가능한 모든 숫자의 조합(순서를 고려한, 즉 다른 순서는 다른 조합이다.)
// 가장 간단한 형태의 백트래킹 문제 풀이 개념
// Stack을 활용해서 풀어내보자.

// how?

// 순서가 중요하다.
// 즉 첫 번째 숫자부터 for문 돌면서 숫자 push/pop하고 마지막 순서의 for loop에서 해당 시점의 stack을 복사해서 결과 배열에 push 하는 형태로풀면 되지 않을까?

// 인프런 강의에서 배운 내용을 반영해서 처리하자.
// 3개 중 3개를 고르는 형태로 생각하면 된다.
function permute(nums) {
  const answer = [];

  // 상황별 데이터 처리 여부 저장할 배열
  const isUsed = Array(nums.length).fill(0);
  const stack = [];

  function recursive() {
    if (stack.length === nums.length) {
      //종료조건
      answer.push([...stack]);
    } else {
      // 요소에 대해서 저장하면서 처리
      for (let i = 0; i < nums.length; i++) {
        // 아직 처리된적이 없는 요소인 경우 처리
        if (isUsed[i] === 0) {
          // 사용 처리
          isUsed[i] = 1;
          // 이번에 처리되어야 하는 idx에 값 처리
          stack.push(nums[i]);
          // 다음 분기 실행
          recursive();
          // 실행 종료 후에 사용된 요소에 대해서 사용되지 않은 것으로 롤백
          isUsed[i] = 0;
          // 스택에서 해당 요소 제거
          stack.pop();
        }
      }
    }
  }

  recursive();

  return answer;
}

console.log(permute([1, 2, 3, 4]));
// think about the concept itself.
// how can I use the concept of backtracking to get all the possible permutations?
// backtracking means going back to a certain point to get the wanted answer;

// 1 -> 2 -> 3 -> 4
// 그리고 다시 2로 돌아가서 이번에는 4 - 3 순서대로 처리한다.

// 이게 가장 일반적인 형태의 로직인데 이걸 how to implement in code?

// 스택에 밀어넣고 pop()하고 이러면서 구현할 건덕지가 분명히 있어보이는데.....그게 뭘까...

// 반복문은 필요해 시작 지점을 잡기 위해서.
// 스택에 1을 넣는다.
// 그 다음에 재귀적으로 그 다음 순서를 실행되도록 한다.
// 이게 맞나?무엇을 push pop할지 어떻게 알지
//

// 아이디어가 떠오르지 않아서 인프런 강의를 들었음.
// 우선 구두 설명을 듣고 나서 먼저 구현을 시도하겠음

// 주어진 배열 중 N개로 구성된 순열을 다 반환하는 로직
function infPermute(N, arr) {
  const answer = [];

  const isUsed = Array.from({ length: arr.length }, () => 0);
  const selected = Array.from({ length: N }, () => 0);

  const stack = [];

  // L - 처리되는 선택 순서
  function dfs(L) {
    if (L === N) {
      answer.push([...selected]);
    } else {
      for (let i = 0; i < arr.length; i++) {
        // 사용할 수 있는지 확인
        if (isUsed[i] === 0) {
          isUsed[i] = 1;
          // selected[L] = arr[i]; // 사용 가능한 상태인 값을 selected배열에 더한다.
          // stack으로 해도 되겠지.
          stack.push(arr[i]);
          // 재귀 호출
          dfs(L + 1);
          // 여기서부터가 이전 분기에서 돌아온 BACK시점. 즉 사용 취소 처리를 해줘야 한다.
          isUsed[i] = 0;
          stack.pop();
        }
      }
    }
  }
  dfs(0);

  return answer;
}

// console.log(infPermute(2, [1, 2, 3]));

// 구조적으로 머릿속으로 조금 더 생각해보면서 이해가 되었다.
