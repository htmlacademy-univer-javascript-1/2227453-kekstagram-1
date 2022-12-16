export const getRandomPositiveInt = (min, max) => {
  if (min < 0 || max <= min) {
    //return -1
    throw new Error('IllegalArgumentExeption');
  }
  //Sourse: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const checkLength = (str, maxLen) =>  str.length <= maxLen;

