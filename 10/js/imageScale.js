const SCALE_STEP = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;

const form = document.querySelector('.img-upload__form');
const scaleDownButton = form.querySelector('.scale__control--smaller');
const scaleUpButton = form.querySelector('.scale__control--bigger');
const imagePreview = form.querySelector('.img-upload__preview');
const scaleValue = form.querySelector('.scale__control--value');

const onImageScaleUp = () => {
  let value = parseInt(scaleValue.value, 10);
  if (value < MAX_SCALE_VALUE) {
    value += SCALE_STEP;
    scaleValue.value = `${value}%`;
    imagePreview.style.transform = `scale(${value / 100.0})`;
  }
};

const onImageScaleDown = () => {
  let value = parseInt(scaleValue.value, 10);
  if (value > MIN_SCALE_VALUE) {
    value -= SCALE_STEP;
    scaleValue.value = `${value}%`;
    imagePreview.style.transform = `scale(${value / 100.0})`;
  }
};

export const setDefaultScaleValue = () => {
  scaleValue.value = '100%';
  imagePreview.style.transform = 'scale(1)';
};

scaleDownButton.addEventListener('click', onImageScaleDown);
scaleUpButton.addEventListener('click', onImageScaleUp);
