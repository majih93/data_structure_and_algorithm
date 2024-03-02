// 735. Asteroid Collision

function getNumberSign(numb) {
  return numb > 0 ? "positive" : "negative";
}

var asteroidCollision = function (as) {
  const answerStack = [];

  // 필요한 처리
  // 마지막 행성이 양수이고 입력되는 아이가 음수인 경우에 대해서만 처리가 필요하다.
  for (const a of as) {
    if (a < 0 && answerStack.at(-1) > 0) {
      // while문을 돌면서 필요한 처리
      // 1. 마지막 요소 + 음수행성이 음수인 경우
      // - pop()
      // - stack 상태 확인 후 마지막 요소가 음수이거나 빈 stack인 경우 push
      // 2. 0인 경우 -> pop()하고 break;
      // 3. 양수인 경우 -> 아무 처리도 필요없음. break.
      while (answerStack.length && answerStack.at(-1) > 0) {
        const sum = a + answerStack.at(-1);

        if (sum === 0) {
          answerStack.pop();
          break;
        } else if (sum < 0) {
          answerStack.pop();
          if (!answerStack.length || answerStack.at(-1) < 0) {
            answerStack.push(a);
          }
        } else {
          break;
        }
      }
    } else {
      answerStack.push(a);
    }
  }
  return answerStack;
};

// console.log(asteroidCollision([5, 10, -5]));
// console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
console.log(asteroidCollision([-2, -2, 1, -2]));
