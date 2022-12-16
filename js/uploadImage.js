import {form, hashtagForm, comment, validateForm} from './uploadImageValidation.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');

const closeWindow = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
  hashtagForm.value = '';
  comment.value = '';
};

const onEscKeydownClick = (evt) => {
  if (evt.code === 'Escape' &&
    !(evt.target.matches('input')) &&
    !(evt.target.matches('textarea'))) {

    evt.preventDefault();
    closeWindow();
  }
};

cancelButton.addEventListener('click', () => {
  closeWindow();
}, {once: true});

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', (evt) => {
    onEscKeydownClick(evt);
  });
});

form.addEventListener('submit', (evt) => {
  if (!validateForm()) {
    evt.preventDefault();
  }
});
