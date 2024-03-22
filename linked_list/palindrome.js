// leetcode daily challenge: 234. Palindrome Linked List
var isPalindrome = function (head) {
  // how can I solve this with linked list?

  const linkedListArray = [];
  // convert to array with recursion
  function convertLinkedListToArray(listElement) {
    linkedListArray.push(listElement.val);
    if (listElement.next) {
      convertLinkedListToArray(listElement.next);
    }
  }

  convertLinkedListToArray(head);

  for (let i = 0; i < linkedListArray.length; i++) {
    if (linkedListArray[i] !== linkedListArray[linkedListArray.length - 1 - i])
      return false;
  }

  return true;
};

// 오우!! 한 번에 풀었다.

// 히히 그래도 재귀도 쓰고, 뒤집어서 비교하는걸 인덱스로 한 번에 처리도 하고 잘 했구만.
