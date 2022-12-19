import {form, hashtagForm, comment, validateForm} from './uploadImageValidation.js';
import {setDefaultScaleValue} from './imageScale.js';
import {setDefaultEffect} from './imageEffects.js';
import {sendData} from './api.js';
import { uploadFile } from './uploadFile.js';
import { isEscapeKey } from './utils.js';

const uploadFileElement = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const submitButton = form.querySelector('.img-upload__submit');

const closeWindow = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFileElement.value = '';
  hashtagForm.value = '';
  comment.value = '';
};

const onEscKeydownClick = (evt) => {
  if (isEscapeKey(evt.key) &&
    !(evt.target.matches('input')) &&
    !(evt.target.matches('textarea'))) {

    evt.preventDefault();
    closeWindow();
  }
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

cancelButton.addEventListener('click', () => {
  closeWindow();
});

uploadFileElement.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  setDefaultScaleValue();
  setDefaultEffect();
  uploadFile(uploadFileElement.files[0]);
  document.addEventListener('keydown', (evt) => {
    onEscKeydownClick(evt);
  });
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    blockSubmitButton();
    sendData(
      () => {
        unblockSubmitButton();
        closeWindow();
      },
      new FormData(evt.target));
  }
});
