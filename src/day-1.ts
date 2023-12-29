/**
 * Given this input of 4 lines:
 * 1abc2
 * pqr3stu8vwx
 * a1b2c3d4e5f
 * treb7uchet
 *
 * We can deduce the following values:
 * 12
 * 38
 * 15
 * 77
 *
 * And the sum of all these values equal 142
 */

const NUMBER_TO_LETTER = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

function hasNumber(str) {
  return /\d/.test(str);
}

export const stringWithNumbers = (str: string): string => {
  let currentWithLetter = '';

  for (let index = 0; index < str.length; index++) {
    let char = str[index];
    currentWithLetter += char.toLowerCase();

    for (const [key, value] of Object.entries(NUMBER_TO_LETTER)) {
      if (currentWithLetter.includes(key)) {
        currentWithLetter = currentWithLetter.replace(
          key,
          `${key[0]}${value.toString()}${key[key.length - 1]}`
        );
        break;
      }
    }
  }

  return currentWithLetter;
};

export function calculateSum(input: string[]): number {
  return input.reduce((prev, current, index) => {
    const currentWithLetter = stringWithNumbers(current);

    console.log(currentWithLetter);
    let matches = currentWithLetter.replace(/[^0-9]/g, '');
    const stringInsideAnArray = [...matches];
    if (stringInsideAnArray.length === 0) {
      return prev;
    }
    if (stringInsideAnArray.length === 1) {
      stringInsideAnArray.push(stringInsideAnArray[0]);
    }
    const finalArrayOfTwoNumbers = [
      stringInsideAnArray[0],
      stringInsideAnArray[stringInsideAnArray.length - 1]
    ].join('');

    return prev + Number(finalArrayOfTwoNumbers);
  }, 0);
}
