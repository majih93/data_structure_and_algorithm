// 287. Find the Duplicate Number
function findDuplicate(nums) {
  const isRepeated = Array(nums.length).fill(0);

  // 1,2,3,4 라고 생각하고 돌면서 count
  // 1을
  for (let i = 0; i < nums.length; i++) {
    if (isRepeated[nums[i]] === 0) {
      isRepeated[nums[i]] = 1;
    } else {
      return nums[i];
    }
  }
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2

// 그래도 생각한대로 문제를 풀어내고 있다.
