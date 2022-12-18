import { showFullSizePost } from './bigRendering.js';

export const renderingPosts = (data) => {
  const tempPost = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const photoList = document.createDocumentFragment();

  data.forEach((post) => {
    const {url, likes, comments} = post;
    const postElement = tempPost.cloneNode(true);
    postElement.querySelector('.picture__img').src = url;
    const photoInfo = postElement.querySelector('.picture__info');
    photoInfo.querySelector('.picture__comments').textContent = comments.length;
    photoInfo.querySelector('.picture__likes').textContent = likes;
    postElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      showFullSizePost(post);
    });
    photoList.appendChild(postElement);
  });

  document.querySelector('.pictures').appendChild(photoList);
};
