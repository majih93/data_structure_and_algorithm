// 뒤에 큰 수 찾기
function solution(numbers) {
  let answer = Array(numbers.length).fill(-1); // -1로 초기화

//   let tempMax = numbers[0];
//   let lastIdx = 0;

//   // 1번째 요소부터 탐색
//   for (let i = 1; i < numbers.length; i++) {
//     if (i === 1 && tempMax > numbers[i]) {
//       tempMax = numbers[i];
//       lastIdx = 1;
//     }

//     if (numbers[i] > numbers[0] && answer[0] === -1) {
//       answer[0] = tempMax;
//     }

//     if (numbers[i] > tempMax) {
//       tempMax = numbers[i];
//       for (let j = lastIdx; j <= i - 1; j++) {
//         answer[j] = tempMax;
//       }
//       lastIdx = i;
//     }
//   }

//   return answer;
// }

// console.log(solution([2, 3, 3, 5]));
// console.log(solution([9, 1, 5, 3, 6, 2]));

// 대부분의 경우에 실패
// 가닥은 맞게 잡았을 거같은데 디테일을 놓친 부분이 있을 듯 하다.

// 가닥에 대해서 다시 생각해보자.

// 특정 지점까지 최대값을 찾고, 해당 값이 갱신되는 경우에 저장된 지점까지 그 최대수로 대체하는 로직이다.
// 어떤 경우를 못 걸러낼까?
// [10, 9, 8, 7, 6, 5, 8, 11]

// 지금 max는 9로 되어있는데,
// 11이 등장한다고 쳐보자.
// 이러면 9에 대해서도 11이 등장해야 하는데, 11이 처리가 되지 않는 이슈가 있다.

// 근본적으로 접근법이 틀렸을 것 같음.

// 뒷큰수라...

// 저장되지 않은 최초 자릿수를 기억해두고, 그 자릿수까지 다 탐색하면서 매번 처리되는 형태
// 최악의 경우 다 탐색해야되지만 그래도 될 가능성이 있음

// 아니면, 저장되지 않는 케이스만 인덱스를 저장해서 해당 배열에 대해서 매번 탐색하는 걸로 처리하면 어때?

// let notDecided = [0, 10, 14] 에 대해서 looping하면서 해당 값이 더 크면 업데이트 시키는 형태
// function solution2(numbers) {
//   let answer = Array(numbers.length).fill(-1);

//   // let notDecided = new Map();
//   // Map 을 통해서 처리할까 했는데, JavaScript Map 을 iterate하면서 값을 제거하는게 safe한 처리인지 모르겠음.
//   // 일단은 Array 및 filter() 메서드를 활용해서 구현하자.
//   // 그래도 filter 메서드가 자연스럽게 생각나는거보니 조금 나아졌네.

//   // 조금 더 refining 하면 좋겠는데 아이디어 자체를..
//   // 일단 컨셉 자체는 좀 잡은거같음.
//   // [ 1,8, 3, 6, 10, 13, 7, 4, 2, 9, 77, 9, 23, 10]

//   // 위 배열에 대해서 절차적으로 수도코드 작성해보자.

//   // answer를 필요한 지점까지 iterate하지 않고 별도의 배열에 값이 정해지지 않은 인덱스를 저장하는이유는?
//   // 조금이라도 더 효율적으로 처리하기 위해서
//   let notDecided = [0];

//   let tempMax = 0;

//   for (let i = 1; i < numbers.length; i++) {
//     // 만약에 해당 값이 더 큰 값이면 지금까지 나온 값들 중에서 안 처리된 값 다 처리한다.
//     // 그리고 초기화. [3,2,1, 7, 1,2,3,] 7 -> 1로 초기화되도록 처리 필요
//     if(numbers[i] > tempMax) {
//       tempMax = numbers[i];

//       for(let j = 0;j < notDecided.length; j++) {
//         if(tempMax > numbers[notDecided[j]]) {
//           answer.
//         }
//       }
//     }
//   }

//   return answer;
// }
    }
  }

  return answer;
}
