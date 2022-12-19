import { getSuccessMessage, getErrorMessage} from './messages.js';

const SERVER_LOAD_URL = 'https://26.javascript.pages.academy/kekstagram/data';
const SERVER_UPLOAD_URL = 'https://26.javascript.pages.academy/kekstagram';
const ERROR_UPLOAD_MESSAGE = 'Не удалось загрузить фото(';
const ERROR_LOAD_MESSAGE = 'Не удалось получить фото с сервера';

export const getData = (renderData) => {
  fetch(SERVER_LOAD_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      getErrorMessage(ERROR_LOAD_MESSAGE);
    })
    .then((posts) => {renderData(posts);})
    .catch(() => getErrorMessage(ERROR_LOAD_MESSAGE));
};


export const sendData = (finallyAction, formData) => {
  fetch(SERVER_UPLOAD_URL,
    {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      if (!response.ok) {
        getErrorMessage(ERROR_UPLOAD_MESSAGE);
      } else {
        getSuccessMessage();
      }
    })
    .catch(() => {
      getErrorMessage(ERROR_UPLOAD_MESSAGE);
    })
    .finally(() => finallyAction());
};
