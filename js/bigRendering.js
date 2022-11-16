const body = document.querySelector('body');
const bigPictureClass = document.querySelector('.big-picture');
const commentsLoader = bigPictureClass.querySelector('.comments-loader.comments-loader');
const commentsCount = bigPictureClass.querySelector('.social__comment-count');
const listOfComments = bigPictureClass.querySelector('.social__comments');

const onCloseButtonClick = () => {
  bigPictureClass.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.removeEventListener('keydown', onEscKeydownClick);
};

const onEscKeydownClick = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onCloseButtonClick();
  }
};

const showComments = (comments) => {
  const prevComments = bigPictureClass.querySelectorAll('.social__comment');
  for (const comment of prevComments) {
    comment.remove();
  }
  for(const comment of comments) {
    const {avatar, name, message} = comment;
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.src = avatar;
    img.alt = name;
    img.width = '35';
    img.height = '35';
    commentElement.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('social__text');
    p.textContent = message;
    commentElement.appendChild(p);
    listOfComments.appendChild(commentElement);
  }

  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

};

export const showFullSizePost = (post) => {
  const {url, likes, descriptions, comments} = post;
  document.querySelector('.big-picture__img').querySelector('img').src = url;
  document.querySelector('.likes-count').textContent = likes;
  document.querySelector('.social__caption').textContent = descriptions;
  body.classList.add('modal-open');
  bigPictureClass.classList.remove('hidden');
  document.querySelector('.big-picture__cancel').addEventListener('click', (evt) => {
    evt.preventDefault();
    onCloseButtonClick();
  });
  document.addEventListener('keydown', onEscKeydownClick);
  showComments(comments);
};
