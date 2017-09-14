const singleDigitMultiply = (str, number) => {
  if (number === 0) return '0';

  let answer = '';
  let mixin = 0;

  for (let i = str.length - 1; i >= 0; i -= 1) {
    const product = (Number(str[i]) * number) + mixin;
    answer = String(product % 10) + answer;
    mixin = Math.floor(product / 10);
  }

  if (mixin > 0) answer = String(mixin) + answer;

  return answer;
};

const add = (first, second) => {
  let answer = '';
  let mixin = 0;

  const difference = first.length - second.length;

  if (difference > 0) {
    second = '0'.repeat(difference) + second;
  } else {
    first = '0'.repeat(-difference) + first;
  }

  for (let i = first.length - 1; i >= 0; i -= 1) {
    const product = Number(first[i]) + Number(second[i]) + mixin;
    answer = String(product % 10) + answer;
    mixin = Math.floor(product / 10);
  }

  if (mixin > 0) answer = String(mixin) + answer;

  return answer;
};


module.exports = function multiply(first, second) {
  let answer = '';
  let step = 0;

  for (let i = second.length - 1; i >= 0; i -= 1) {
    answer = add(answer, singleDigitMultiply(first, Number(second[i])) + '0'.repeat(step));
    step += 1;
  }

  return answer;
};
