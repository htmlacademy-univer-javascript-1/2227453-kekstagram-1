const DEFOULT_NEW_COMMMENTS_COUNT = 5;

const body = document.querySelector('body');
const bigPictureClass = document.querySelector('.big-picture');
const commentsLoader = bigPictureClass.querySelector('.comments-loader');
const commentsCount = bigPictureClass.querySelector('.comments-count');
const showedCommentsCounter = bigPictureClass.querySelector('.showed__comments-count');
const listOfComments = bigPictureClass.querySelector('.social__comments');

let showedComments;

let actionsAfterClose = [];

const onCloseButtonClick = () => {
  bigPictureClass.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  actionsAfterClose.forEach((action) => action());
  actionsAfterClose = [];
};

const onEscKeydownClick = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onCloseButtonClick();
  }
};

const showComments = (comments, count) => {
  for(let i = showedComments; i < showedComments + count; i++) {
    const {avatar, name, message} = comments[i];
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

  showedComments += count;
  showedCommentsCounter.textContent = showedComments;
  if (comments.length === showedComments) {
    commentsLoader.classList.add('hidden');
  }
};

export const showFullSizePost = (post) => {
  const {url, likes, descriptions, comments} = post;
  document.querySelector('.big-picture__img').querySelector('img').src = url;
  document.querySelector('.likes-count').textContent = likes;
  document.querySelector('.social__caption').textContent = descriptions;
  commentsCount.textContent = comments.length;
  body.classList.add('modal-open');
  bigPictureClass.classList.remove('hidden');
  document.querySelector('.big-picture__cancel').addEventListener('click', (evt) => {
    evt.preventDefault();
    onCloseButtonClick();
  });
  document.addEventListener('keydown', onEscKeydownClick);
  actionsAfterClose.push(() => { document.removeEventListener('keydown', onEscKeydownClick); });

  const prevComments = bigPictureClass.querySelectorAll('.social__comment');
  for (const comment of prevComments) {
    comment.remove();
  }
  const loadNewComments = () => showComments(comments, Math.min(comments.length - showedComments, DEFOULT_NEW_COMMMENTS_COUNT));
  commentsLoader.addEventListener('click', loadNewComments);
  actionsAfterClose.push(() => commentsLoader.removeEventListener('click', loadNewComments));
  showedComments = 0;
  loadNewComments();
};
