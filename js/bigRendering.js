const body = document.querySelector('body');
const bigPictureClass = document.querySelector('.big-picture');
const listOfComments = bigPictureClass.querySelector('.social__comments');
const commentsLoader = bigPictureClass.querySelector('.comments-loader.comments-loader');
const commentsCount = bigPictureClass.querySelector('social__comment-count');

const closeButtonHandler = () => {
  bigPictureClass.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', clickEscKeydown);
};

const clickEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeButtonHandler();
  }
};

const showComments = (comments) => {
  for(const comment of comments) {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.src = comment.avatar;
    img.alt = comment.name;
    img.width = '35';
    img.height = '35';
    commentElement.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('social__text');
    p.textContent = comment.message;
    commentElement.appendChild(p);
    listOfComments.appendChild(commentElement);
  }

  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

};

export const viewFullSize = (post) => {
  document.querySelector('.big-picture__img').querySelector('img').src = post.url;
  document.querySelector('.likes-count').textContent = post.likes;
  document.querySelector('.social__caption').textContent = post.description;
  body.classList.add('modal-open');
  bigPictureClass.classList.remove('hidden');
  document.querySelector('.big-picture__cancel').addEventListener('click', closeButtonHandler);
  document.addEventListener('keydown', clickEscKeydown);
  showComments(post.comments);
};
