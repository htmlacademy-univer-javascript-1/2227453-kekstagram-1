const errorTemplate = document.querySelector('#error').content.querySelector('section');
const successTemplate = document.querySelector('#success').content.querySelector('section');

const errorBlock = errorTemplate.cloneNode(true);
const successBlock = successTemplate.cloneNode(true);

const errorTitle = errorBlock.querySelector('.error__title');

const errorButton = errorBlock.querySelector('.error__button');
const successButton = successBlock.querySelector('.success__button');

errorBlock.classList.add('hidden');
successBlock.classList.add('hidden');
document.body.append(errorBlock);
document.body.append(successBlock);

let actionsAfterClose = [];

const onButtonsClick = () => {
  errorBlock.classList.add('hidden');
  successBlock.classList.add('hidden');
  actionsAfterClose.forEach((action) => action());
  actionsAfterClose = [];
};

const onEscKeydownClick = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onButtonsClick();
  }
};


export const getErrorMessage = (message) => {
  errorBlock.classList.remove('hidden');
  errorTitle.textContent = message;
  document.addEventListener('keydown', onEscKeydownClick);
  actionsAfterClose.push(
    () => {
      document.removeEventListener('keydown', onEscKeydownClick);
    }
  );
  errorButton.addEventListener('click', onButtonsClick);
  actionsAfterClose.push(
    () => {
      errorButton.removeEventListener('click', onButtonsClick);
    }
  );
};

export const getSuccessMessage = () => {
  successBlock.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeydownClick);
  actionsAfterClose.push(
    () => {
      document.removeEventListener('keydown', onEscKeydownClick);
    }
  );
  successButton.addEventListener('click', onButtonsClick);
  actionsAfterClose.push(
    () => {
      successButton.removeEventListener('click', onButtonsClick);
    }
  );
};
