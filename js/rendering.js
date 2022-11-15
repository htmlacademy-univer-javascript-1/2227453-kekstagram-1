import { viewFullSize } from './bigRendering';

export const renderingPosts = (data) => {
  const tempPost = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const photoList = document.createDocumentFragment();

  data.forEach(({url, likes, comments}) => {
    const post = tempPost.cloneNode(true);
    post.querySelector('.picture__img').src = url;
    const photoInfo = post.querySelector('.picture__info');
    photoInfo.querySelector('.picture__comments').textContent = comments.length;
    photoInfo.querySelector('.picture__likes').textContent = likes;
    photoList.appendChild(post);
    post.addEventListener('click', viewFullSize(post));
  });

  document.querySelector('.pictures').appendChild(photoList);
};
