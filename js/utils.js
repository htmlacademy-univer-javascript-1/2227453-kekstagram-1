export const getRandomPositiveInt = (min, max) => {
  if (min < 0 || max <= min) {
    throw new Error('IllegalArgumentExeption');
  }
  //Sourse: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const checkLength = (str, maxLen) =>  str.length <= maxLen;

//Sourse: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

let timeoutId;

export const debounce = (callback, timeoutDelay = 500) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(callback, timeoutDelay);
};

export const isEscapeKey = (keycode) => keycode === 'Escape';
