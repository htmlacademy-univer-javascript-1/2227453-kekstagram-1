import { getRandomPositiveInt } from './utils.js';

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

const getRandomLikes = () => getRandomPositiveInt(15, 200);

const getRandomDescription = () => descriptions[getRandomPositiveInt(0, descriptions.length -1)];

const getRandomComment = () => ({
  id: Math.floor(getRandomPositiveInt(1, 10000) + Date.now() * Math.random()), //magic number
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

export const generatePosts = () => Array.from({ length: NUM_POSTS }, (_, i) => getPost(i));


