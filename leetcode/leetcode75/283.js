// 283. Move Zeroes
// why is this in the two pointer 영역
// copy of the array
// in-place
// 새로운 배열을 만들지 않고 구현되어야 한다.
// 흠...
// a pointer to iterate the arr
// another to deal with 0 elements
// 일단 다른 배열을 하려면 어떻게 되어야 하는가?
// 아하 하나는 뒤로 보내고 하나는 앞으로 해서 처리하면 되겠네
// 자리를 바꾸는 형태로 가보자 바꿔야 하는 위치는 따로 알아보고
// 0을 보내야하는 위치를 파악하는 포인터 하나, 배열을 iterate하는 pointer하나,
// 두 번째 포인터가 배열의 가장 마지막으로 이동한 경우 끝내면 됨

var moveZeroes = function (nums) {
  let p1 = 0;
  let p2 = 1;

  while (p1 < nums.length) {
    // p1은 현재 탐색중인 배열 요소
    // p2는 가장 마지막으로 0으로 변경된 위치
    // 가장 마지막으로 0으로 변경된 위치가
    if (nums[p1] === 0) {
      while (p2 < nums.length) {
        if (nums[p2] !== 0) {
          [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
          console.log(nums);
          break;
        } else {
          p2++;
        }
      }
    }
    p1++;
  }

  return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 1]));
// console.log(moveZeroes([0]));
console.log(moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]));

// time limit exceeded error 발생
// p2를 적절히 처리하지 못해서 발생한 문제

// 제대로 처리안됨
// -> p1이 0인 경우, p2탐색 시작 위치를 조정시키는 처리를 빼먹음
// -> p2 위치를 p1 다음 요소부터 탐색되도록 처리해야된다.
