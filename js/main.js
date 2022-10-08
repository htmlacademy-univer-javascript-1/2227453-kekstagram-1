const NUM_POSTS = 25;

const descriptions = [
  'Это я на отдыхе был. Щас я дома уже',
  'Это я на работе был. Щас я дома уже',
  'Это я дома был. Щас я дома уже',
  'Это я на выступлении был. Щас я дома уже',
  'Это я в Австралии был. Щас я дома уже',
  'Это я в горах был. Щас я дома уже',
  'Это я на пляже был. Щас я дома уже',
  'Это я в парке был. Щас я дома уже',
  'Это я в гостях был. Щас я дома уже',
  'Это я на море был. Щас я дома уже',
];

const commentMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Bogdan',
  'Dmitriy',
  'Maria',
  'Sasha',
  'Jolya',
  'Daniil',
  'Danil',
  'Maxim',
  'Ilya',
  'Joseph',
  'Mila',
  'Valentin',
  'Alice',
  'Nika',
  'Valeria'
];

const getRandomPositiveInt = (min, max) => {
  if (min < 0 || max <= min) {
    //return -1
    throw new Error('IllegalArgumentExeption');
  }
  //Sourse: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// eslint-disable-next-line no-unused-vars
const checkLength = (str, maxLen) =>  str.length <= maxLen;

const getRandomLikes = () => getRandomPositiveInt(15, 200);

const getRandomDescription = () => descriptions[getRandomPositiveInt(0, descriptions.length -1)];

const getRandomComment = () => ({
  id: Math.floor(Math.random() * 10000 + Date.now() * Math.random()),
  avatar: `img/avatar-${getRandomPositiveInt(1, 6)}.svg`,
  message: commentMessages[getRandomPositiveInt(0, commentMessages.length - 1)],
  name: names[getRandomPositiveInt(0, names.length - 1)]
});

const getPost = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  descriptions: getRandomDescription(),
  likes: getRandomLikes(),
  comments: Array.from({length: getRandomPositiveInt(1, 4)}, getRandomComment)
});

// eslint-disable-next-line no-unused-vars
const generatePosts = () => {
  const posts = [];
  for (let i = 1; i <=NUM_POSTS; i++) {
    posts.push(getPost(i));
  }
  return posts;
};

