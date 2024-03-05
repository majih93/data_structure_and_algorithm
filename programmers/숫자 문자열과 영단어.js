function isNumber(s) {
  return typeof Number(s) === "number" && !Number.isNaN(Number(s));
}

function solution(s) {
  let resultNumberInString = "";

  const numberTexts = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let tempString = "";

  for (const ch of s) {
    // 숫자가 아닌 경우 문자로 처리
    if (isNumber(ch)) {
      resultNumberInString += ch;
    } else {
      // 문자인 경우 일단 tempString에 더하고, 배열에 존재하는지 확인
      tempString += ch;

      const numberIdx = numberTexts.indexOf(tempString);

      // 없는 경우에는 -1이기 때문에 양수인지 확인
      if (numberIdx >= 0) {
        resultNumberInString += `${numberIdx}`; // String으로 숫자에 더해준다.
        // tempString초기화
        tempString = "";
      }
    }
  }

  return Number(resultNumberInString);
}

console.log(solution("one4seveneight"));
