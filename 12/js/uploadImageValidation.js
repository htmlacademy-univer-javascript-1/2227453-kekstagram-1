import {checkLength} from './utils.js';

const REGEX_HASHTAG = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

export const form = document.querySelector('.img-upload__form');
export const hashtagForm = form.querySelector('.text__hashtags');
export const comment = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-errors',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
}, false);

const validateComment = (value) => checkLength(value, 140);

const validateHashtags = (hashtags) => {
  if (hashtags.length === 0) {
    return true;
  }

  const separatedHashtags = hashtags.split(' ');
  const setHashtags = new Set();
  for (const hashtag of separatedHashtags) {
    if (!REGEX_HASHTAG.test(hashtag)) {
      return false;
    }

    const lowerCaseHashtag = hashtag.toLowerCase();
    if (setHashtags.has(lowerCaseHashtag)) {
      return false;
    }
    setHashtags.add(lowerCaseHashtag);
  }
  return setHashtags.size <= 5;
};

pristine.addValidator(comment, validateComment, 'Длина комментария не должна быть больше 140 символов');

pristine.addValidator(hashtagForm, validateHashtags, 'Некорректный хэштэг');

export const validateForm = () => pristine.validate();
